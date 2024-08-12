import { useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Dropdown, InputField, Label, PrimaryButton } from 'mingle-ui';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

import { RELATIONSHIP_LIST, SVGS, PNGS } from '@/constants';
import { DELIMITER } from '@/utils';

import MetaData from '@/components/MetaData';
import QuillToolbar, { modules } from '@/components/pages/addCard/QuillToolbar';
import Header from '@/components/ui/Header';
import { useAddCard } from '@/pages/AddCard/data-access/useAddCard';
import {
  checkUploadStatus,
  getUploadUrl,
  uploadImageCloudflare,
} from '@/pages/CreateBoard/data-access/cloudflareImageService';

import { addFormSchema } from './schema';

const {
  add: { url, alt },
} = SVGS;

interface FormData {
  name: string;
  password: string;
  content: string;
}

const AddCard = () => {
  const params = useParams();
  const recipientId = Number(params.id);
  const methods = useForm<FormData>({
    mode: 'all',
    resolver: zodResolver(addFormSchema),
  });

  const quillRef = useRef<ReactQuill>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const { postCardMutation, isPostCardLoading } = useAddCard(recipientId);

  const [preview, setPreview] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploadId, setUploadId] = useState('');
  const [isSelected, setIsSelected] = useState(RELATIONSHIP_LIST[0].id);

  const handleSeletedValue = (id: string) => {
    setIsSelected(id);
  };

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (!files) return;
    const file = files[0];

    const imagePreviewUrl = URL.createObjectURL(file);
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(imagePreviewUrl);
    setFile(file);

    const id = await getUploadUrl();
    setUploadId(id);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { name, password, content } = data;
    const newName = [name, password].join(DELIMITER);
    const cardForm = {
      recipientId,
      sender: password ? newName : name,
      profileImageURL: PNGS.card.url,
      relationship: isSelected,
      content,
      font: 'Noto Sans',
    };

    if (file) {
      const uploadResponse = await uploadImageCloudflare(file, uploadId);
      if (!uploadResponse?.ok) return;

      const checkResponse = await checkUploadStatus(uploadId);
      const imageUrl = checkResponse.result.variants[0];

      cardForm.profileImageURL = imageUrl;
    }

    postCardMutation({ recipientId, cardForm });
  };

  return (
    <>
      <MetaData title='Mingle | Add Card' />
      <div>
        <Header />
        <main className='m-auto flex max-w-full flex-col gap-4 px-5 py-[100px] md:max-w-[720px] md:gap-8'>
          <h2 className='text-bold-24'>Add Card</h2>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
              <div className='flexbox-column-center md:flexbox-row gap-8'>
                <div className='flex flex-col items-center gap-4'>
                  <h3 className='w-full text-bold-18'>Card Image</h3>
                  <label
                    style={{
                      background: `url(${preview}) no-repeat center / cover`,
                    }}
                    htmlFor='photo'
                    className='flexbox-row-center base-transition group relative h-[300px] w-[260px] cursor-pointer overflow-hidden rounded-2xl border border-dashed border-neutral-800 hover:border-yellow-300'
                  >
                    {!preview && (
                      <div className='flexbox-column-center *:base-transition'>
                        <div className='image-button flexbox-column-center mb-6 size-9 rounded-md'>
                          <img src={url} alt={alt} />
                        </div>
                        <div className='flexbox-column-center absolute bottom-4 gap-1 text-base-13 text-neutral-500 group-hover:text-neutral-200'>
                          <span>Recommended size: 600x800</span>
                          <span>Maximum file size: 3MB</span>
                        </div>
                      </div>
                    )}
                  </label>
                  <input
                    ref={inputRef}
                    id='photo'
                    name='photo'
                    type='file'
                    className='hidden'
                    onChange={onImageChange}
                  />
                </div>

                <fieldset className='flex w-full flex-grow flex-col gap-6 md:pt-[2rem]'>
                  <legend>mingle | sender infomation </legend>
                  <InputField
                    formMethod={methods}
                    label='From.'
                    name='name'
                    type='text'
                    placeholder='Name'
                    errorMessage={errors.name?.message}
                    maxLength={13}
                    autoComplete='username'
                  />
                  <InputField
                    formMethod={methods}
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='● ● ● ●'
                    errorMessage={errors.password?.message}
                    maxLength={4}
                    autoComplete='current-password'
                  />
                  <div>
                    <Label>Relationship</Label>
                    <Dropdown onClick={handleSeletedValue} selectList={RELATIONSHIP_LIST} />
                  </div>
                </fieldset>
              </div>

              <fieldset>
                <legend>mingle | Text Editor</legend>
                <Label>Enter the content below!</Label>
                <div className={`${errors.content && 'quill-error'}`}>
                  <QuillToolbar />
                  <Controller
                    name='content'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Content is required' }}
                    render={({ field }) => (
                      <ReactQuill
                        theme='snow'
                        ref={quillRef}
                        value={field.value}
                        onChange={field.onChange}
                        modules={{ toolbar: modules.toolbar }}
                        className='sm-quill-width h-[200px] md:w-[680px]'
                      />
                    )}
                  />
                </div>
              </fieldset>

              <PrimaryButton size='lg' type='submit' disabled={isPostCardLoading}>
                Add Card
              </PrimaryButton>
            </form>
          </FormProvider>
        </main>
      </div>
    </>
  );
};

export default AddCard;

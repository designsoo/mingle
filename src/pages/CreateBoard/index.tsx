import { useState } from 'react';

import { InputField, PrimaryButton, TabList } from 'mingle-ui';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { PAPER_BACKGROUND_COLORS, PAPER_BACKGROUND_IMAGES, TAB_LIST } from '@/constants';
import { DELIMITER } from '@/utils';

import BackgroundColorOptions from '@/components/pages/createBoard/BackgroundColorOptions';
import BackgroundImageOptions from '@/components/pages/createBoard/BackgroundImageOptions';
import PreviewBoard from '@/components/pages/createBoard/PreviewBoard';
import Header from '@/components/ui/Header';
import { checkUploadStatus, uploadImageCloudflare } from '@/pages/CreateBoard/data-access/cloudflareImageService';
import { useCreateBoard } from '@/pages/CreateBoard/data-access/useCreateBoard';

type FormValues = {
  name: string;
  backgroundColor: string;
  backgroundImageURL: null | string;
};

const CreateBoard = () => {
  const methods = useForm({
    mode: 'all',
  });
  const { control, handleSubmit, getValues } = methods;
  const name = useWatch({
    control: control,
    name: 'name',
  });

  const { postFormMutation, isCreateLoading } = useCreateBoard();

  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0].id);
  const [selectedOption, setSelectedOption] = useState(PAPER_BACKGROUND_COLORS[0].id);
  const [preview, setPreview] = useState(PAPER_BACKGROUND_COLORS[0].value);
  const [file, setFile] = useState<File | null>(null);
  const [uploadId, setUploadId] = useState('');
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    backgroundColor: 'blue',
    backgroundImageURL: null,
  });

  const handleImageClick = (id: string, value: string, type: string) => {
    setSelectedOption(id);
    setPreview(value);
    setFormData((prev) => ({
      ...prev,
      backgroundColor: type === 'backgroundColor' ? id : prev.backgroundColor,
      backgroundImageURL: type === 'backgroundImageURL' ? value : null,
    }));
  };

  const onSubmit = async () => {
    const toName = getValues('name');
    const password = getValues('password');
    const newName = [name, password].join(DELIMITER);
    const updatedFormData = {
      ...formData,
      name: password ? newName : toName,
    };

    if (file) {
      const uploadResponse = await uploadImageCloudflare(file, uploadId);
      if (!uploadResponse.ok) return;

      const checkResponse = await checkUploadStatus(uploadId);
      const imageUrl = checkResponse.result.variants[0];

      updatedFormData.backgroundImageURL = imageUrl;
    }

    postFormMutation(updatedFormData);
  };

  return (
    <div>
      <Header />
      <main className='m-auto flex max-w-full flex-col gap-4 px-5 py-[100px] md:max-w-[720px] md:gap-8'>
        <h2 className='text-bold-24'>Create Board</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
            <div className='flexbox-column-center md:flexbox-row gap-8'>
              <div className='flex flex-col items-center gap-4'>
                <h3 className='w-full text-bold-18'>Preview</h3>
                <PreviewBoard previewImgae={preview} name={name} />
              </div>

              <fieldset className='flex w-full flex-grow flex-col gap-7 md:pt-[3rem]'>
                <legend>mingle | create board</legend>
                <InputField
                  formMethod={methods}
                  label='To.'
                  name='name'
                  type='text'
                  placeholder='Name'
                  errorMessage='Name is Required'
                  maxLength={10}
                  isRequired
                  autoComplete='username'
                />
                <InputField
                  formMethod={methods}
                  label='Password'
                  name='password'
                  type='password'
                  placeholder='● ● ● ●'
                  maxLength={4}
                  autoComplete='current-password'
                />
              </fieldset>
            </div>

            <fieldset>
              <legend>mingle | background picker</legend>
              <div className='w-full border-b border-neutral-800'>
                <TabList tabList={TAB_LIST} onClick={setSelectedTab} size='lg' />
              </div>
              {selectedTab ? (
                <BackgroundImageOptions
                  imageList={PAPER_BACKGROUND_IMAGES}
                  selectedImage={selectedOption}
                  onClick={handleImageClick}
                  setFile={setFile}
                  setUploadId={setUploadId}
                />
              ) : (
                <BackgroundColorOptions
                  colorList={PAPER_BACKGROUND_COLORS}
                  selectedImage={selectedOption}
                  onClick={handleImageClick}
                  setFile={setFile}
                />
              )}
            </fieldset>
            <PrimaryButton size='lg' type='submit' disabled={isCreateLoading}>
              Create Board
            </PrimaryButton>
          </form>
        </FormProvider>
      </main>
    </div>
  );
};

export default CreateBoard;

import { useCallback, useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { InputField, PrimaryButton, TabList } from 'mingle-ui';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { PAPER_BACKGROUND_COLORS, PAPER_BACKGROUND_IMAGES, TAB_LIST } from '@/constants';
import { DELIMITER, preloadImages } from '@/utils';

import MetaData from '@/components/MetaData';
import BackgroundColorOptions from '@/components/pages/createBoard/BackgroundColorOptions';
import BackgroundImageOptions from '@/components/pages/createBoard/BackgroundImageOptions';
import PreviewBoard from '@/components/pages/createBoard/PreviewBoard';
import Header from '@/components/ui/Header';
import NavigationBar from '@/components/ui/NavigationBar';
import { checkUploadStatus, uploadImageCloudflare } from '@/pages/CreateBoard/data-access/cloudflareImageService';
import { useCreateBoard } from '@/pages/CreateBoard/data-access/useCreateBoard';

import { ceateFormSchema } from './schema';

type FormValues = {
  name: string;
  password?: string;
  backgroundColor: string;
  backgroundImageURL: null | string;
};

const CreateBoard = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(ceateFormSchema),
    mode: 'all',
    defaultValues: {
      name: '',
      backgroundColor: PAPER_BACKGROUND_COLORS[0].id,
      backgroundImageURL: null,
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;
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

  const handleImageClick = useCallback(
    (id: string, value: string, type: string) => {
      setSelectedOption(id);
      setPreview(value);
      setValue(
        type === 'backgroundColor' ? 'backgroundColor' : 'backgroundImageURL',
        type === 'backgroundColor' ? id : value,
      );
    },
    [setValue],
  );

  const onSubmit = useCallback(
    async (data: FormValues) => {
      data.name = data.password ? [data.name, data.password].join(DELIMITER) : data.name;

      if (file) {
        const uploadResponse = await uploadImageCloudflare(file, uploadId);
        if (!uploadResponse.ok) return;

        const checkResponse = await checkUploadStatus(uploadId);
        data.backgroundImageURL = checkResponse.result.variants[0];
      }

      postFormMutation(data);
    },
    [file, uploadId, postFormMutation],
  );

  useEffect(() => {
    preloadImages(PAPER_BACKGROUND_IMAGES);
  }, []);

  return (
    <>
      <MetaData title='Mingle | Create Board' />
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
                    errorMessage={errors.name?.message}
                    maxLength={10}
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
                </fieldset>
              </div>

              <fieldset>
                <legend>mingle | background picker</legend>
                <div className='w-full border-b border-neutral-800'>
                  <TabList tabList={TAB_LIST} onClick={setSelectedTab} size='lg' />
                </div>
                {selectedTab ? (
                  <BackgroundImageOptions
                    selectedImage={selectedOption}
                    onClick={handleImageClick}
                    setFile={setFile}
                    setUploadId={setUploadId}
                  />
                ) : (
                  <BackgroundColorOptions selectedImage={selectedOption} onClick={handleImageClick} setFile={setFile} />
                )}
              </fieldset>
              <PrimaryButton size='lg' type='submit' disabled={isCreateLoading}>
                Create Board
              </PrimaryButton>
            </form>
          </FormProvider>
        </main>
        <NavigationBar />
      </div>
    </>
  );
};

export default CreateBoard;

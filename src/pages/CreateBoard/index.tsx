import { useState } from 'react';

import { InputField, PrimaryButton, TabList } from 'mingle-ui';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { PAPER_BACKGROUND_COLORS, PAPER_BACKGROUND_IMAGES, TAB_LIST } from '@/constants';

import BackgroundColorOptions from '@/components/pages/createBoard/BackgroundColorOptions';
import BackgroundImageOptions from '@/components/pages/createBoard/BackgroundImageOptions';
import Header from '@/components/ui/Header';
import { checkUploadStatus, uploadImageCloudflare } from '@/pages/CreateBoard/service/cloudflareImageService';
import { useCreateBoard } from '@/pages/CreateBoard/service/useCreateBoard';

const DELIMITER = '&iquest';

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

  const navigate = useNavigate();
  const { postFormMutation } = useCreateBoard(navigate);

  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0].id);
  const [selectedOption, setSelectedOption] = useState(PAPER_BACKGROUND_COLORS[0].id);
  const [preview, setPreview] = useState(PAPER_BACKGROUND_COLORS[0].value);
  const [file, setFile] = useState<File | null>(null);
  const [uploadUrl, setUploadUrl] = useState('');
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
      [type]: type === 'backgroundColor' ? id : value,
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
      const uploadResponse = await uploadImageCloudflare(file, uploadUrl);
      if (!uploadResponse.ok) return;

      const checkResponse = await checkUploadStatus(uploadUrl);
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
                <div
                  style={{
                    backgroundImage: `url(${preview})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                  className='flex h-[300px] w-[260px] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-800 p-4'
                >
                  <div className='board-card-inner flex h-[130px] flex-col justify-between p-3'>
                    <div className='flex flex-col gap-1'>
                      <h4 className='h-7 text-bold-20'>{name}</h4>
                      <span className='text-base-16'>0개의 메시지가 작성됐어요!</span>
                    </div>
                    <div className='flexbox-row-center w-full rounded-full py-2 color-background-opacity-black-30'>
                      <span className='text-base-12'>No Emotions</span>
                    </div>
                  </div>
                </div>
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
                  maxLength={11}
                  isRequired
                />
                <InputField
                  formMethod={methods}
                  label='Password'
                  name='password'
                  type='password'
                  placeholder='● ● ● ●'
                  maxLength={4}
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
                  setUploadUrl={setUploadUrl}
                />
              ) : (
                <BackgroundColorOptions
                  colorList={PAPER_BACKGROUND_COLORS}
                  selectedImage={selectedOption}
                  onClick={handleImageClick}
                />
              )}
            </fieldset>

            <PrimaryButton size='lg'>Create Board</PrimaryButton>
          </form>
        </FormProvider>
      </main>
    </div>
  );
};

export default CreateBoard;

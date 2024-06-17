import { useState } from 'react';

import { InputField, PrimaryButton, TabList } from 'mingle-ui';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { PAPER_BACKGROUND_COLORS, PAPER_BACKGROUND_IMAGES, TAB_LIST } from '@/constants';

import BackgroundColorOptions from '@/components/pages/createBoard/BackgroundColorOptions';
import BackgroundImageOptions from '@/components/pages/createBoard/BackgroundImageOptions';
import Header from '@/components/ui/Header';

const DELIMITER = '&iquest';

const CreateBoard = () => {
  const methods = useForm({
    mode: 'all',
  });

  const { control, handleSubmit, getValues } = methods;

  const toName = useWatch({
    control: control,
    name: 'name',
  });

  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0].id);
  const [selectedOption, setSelectedOption] = useState(PAPER_BACKGROUND_COLORS[0].id);
  const [preview, setPreview] = useState(PAPER_BACKGROUND_COLORS[0].value);

  const handleImageClick = (id: string, value: string) => {
    setSelectedOption(id);
    setPreview(value);
  };

  const onSubmit = () => {
    const name = getValues('name');
    const password = getValues('password');
    const newName = [name, password].join(DELIMITER);

    const newForm = {
      name: newName,
      backgroundImageURL: preview,
    };
    console.log(newForm);
  };

  return (
    <div>
      <Header />
      <main className='m-auto flex max-w-full flex-col gap-4 px-5 py-[100px] md:max-w-[720px] md:gap-8 md:py-[100px]'>
        <h2 className='text-bold-24'>Create Board</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
            <div className='justify-center gap-8 flexbox-column md:flex-row'>
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
                      <h4 className='h-7 text-bold-20'>{toName}</h4>
                      <span className='text-base-16'>0개의 메시지가 작성됐어요!</span>
                    </div>
                    <div className='w-full rounded-full py-2 flexbox-row-center color-background-opacity-black-30'>
                      <span className='text-base-12'>No Emotions</span>
                    </div>
                  </div>
                </div>
              </div>

              <fieldset className='flex w-full flex-grow flex-col gap-6 md:pt-[3rem]'>
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

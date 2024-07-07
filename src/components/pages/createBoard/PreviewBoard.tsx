import { SVGS } from '@/constants';

const {
  members: { url, alt },
} = SVGS;

interface PreviewBoardProps {
  previewImgae: string;
  name: string;
}

const PreviewBoard = ({ previewImgae, name }: PreviewBoardProps) => {
  return (
    <article
      style={{
        backgroundImage: `url(${previewImgae})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className='flex h-[300px] w-[260px] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-800 p-4'
    >
      <div className='board-card-inner flex h-[130px] flex-col items-start justify-between p-3'>
        <div className='flex w-full flex-col gap-2'>
          <h4 className='h-[26px] w-full text-bold-20'>{!name ? 'Name' : name}</h4>
          <div className='flexbox-row justify-start gap-4'>
            <img className='pl-2' src={url} alt={alt} />
            <span className='h-6 w-px border border-white opacity-10'></span>
            <span className='grow text-base-12 opacity-60 color-text-primary'>No Members</span>
          </div>
        </div>

        <div className='flexbox-row-center w-full rounded-full py-2 color-background-opacity-white-10'>
          <span className='text-bold-12'>No Emotions</span>
        </div>
      </div>
    </article>
  );
};

export default PreviewBoard;

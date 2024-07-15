type BoardCountProps = {
  paperCount: number;
  reactionCount: number;
};

const BoardCount = ({ paperCount, reactionCount }: BoardCountProps) => {
  return (
    <ul className='board-count flex w-full gap-6'>
      <li className='flex items-center gap-2'>
        <span className='text-base-14 text-neutral-400'>Paper</span>
        <span className='text-bold-18'>{paperCount}</span>
      </li>
      <li className='flex items-center gap-2'>
        <span className='text-base-14 text-neutral-400'>Members</span>
        <span className='text-bold-18'>{paperCount}</span>
      </li>
      <li className='flex items-center gap-2'>
        <span className='text-base-14 text-neutral-400'>Emotions</span>
        <span className='text-bold-18'>{reactionCount}</span>
      </li>
    </ul>
  );
};

export default BoardCount;

const BoardSkeleton = () => {
  return (
    <>
      <div className='m-auto flex max-w-[1120px] flex-col gap-2 px-5 lg:px-10 xl:px-0'>
        <div className='h-8 w-[160px] animate-pulse rounded-lg bg-neutral-800'></div>
        <div className='flexbox-column-start md:!flexbox-row-between gap-3 md:h-9'>
          <div className='h-8 w-[250px] animate-pulse rounded-lg bg-neutral-800'></div>
          <div className='h-8 w-[160px] animate-pulse rounded-lg bg-neutral-800'></div>
        </div>
      </div>
    </>
  );
};

export default BoardSkeleton;

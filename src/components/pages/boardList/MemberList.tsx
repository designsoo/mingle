import { SVGS } from '@/constants';

import EmptyMember from '@/components/pages/boardList/EmptyMember';
import { MessagesResults } from '@/types/recipients';

const {
  members: { url, alt },
} = SVGS;

interface MemberListProps {
  memberList: MessagesResults[];
  memberCount: number;
}

const MemberList = ({ memberList, memberCount }: MemberListProps) => {
  const MIN_MEMBER_COUNT = 3;
  const isMemberEmpty = memberCount === 0;

  return (
    <div className='flexbox-row justify-start gap-3'>
      <img className='pl-2' src={url} alt={alt} />
      <span className='h-6 w-px border border-white opacity-10'></span>

      {isMemberEmpty ? (
        <EmptyMember />
      ) : (
        <ul className='flex gap-2'>
          {memberList.map((member) => (
            <li key={member.id}>
              <div
                className='size-8 overflow-hidden rounded-full color-background-opacity-white-10'
                style={{
                  backgroundImage: `url(${member.profileImageURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
            </li>
          ))}

          {memberCount > MIN_MEMBER_COUNT && (
            <li>
              <div className='flexbox-row-center size-8 rounded-full color-background-opacity-white-10'>
                <span className='text-bold-12'>{memberCount - MIN_MEMBER_COUNT}+</span>
              </div>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default MemberList;

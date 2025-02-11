import { SlArrowRight } from 'react-icons/sl';

export const UISide = () => {
  return (
    <div className="w-2xs  border-r border-zinc-300 flex-col flex gap-1 overflow-y-auto">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="flex justify-between p-4 pr-2 cursor-pointer hover:bg-zinc-100 items-center"
          onClick={() => {
            console.log('관리자 카테고리 클릭=>', item);
          }}
        >
          <span className="font-bold text-lg text-zinc-800">관리자 카테고리{item}</span>
          <span>
            <SlArrowRight strokeWidth={90} size={15} color="rgba(0,0,0,0.6)" />
          </span>
        </div>
      ))}
    </div>
  );
};

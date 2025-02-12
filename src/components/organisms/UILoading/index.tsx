import { UIModal } from '../../atoms/UIModal';

export const UILoading = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <UIModal isOpen={isOpen}>
        <div className="flex space-x-2 text-6xl font-bold">
          <div className="text-pink-400 animate-bottom-bounce" style={{ animationDelay: '0ms' }}>
            D
          </div>
          <div className="text-red-600 animate-bottom-bounce" style={{ animationDelay: '40ms' }}>
            A
          </div>
          <div className="text-orange-600 animate-bottom-bounce" style={{ animationDelay: '80ms' }}>
            E
          </div>
          <div className="text-blue-950 animate-bottom-bounce" style={{ animationDelay: '120ms' }}>
            S
          </div>
          <div
            className="text-purple-800 animate-bottom-bounce"
            style={{ animationDelay: '160ms' }}
          >
            A
          </div>
          <div
            className="text-orange-400 animate-bottom-bounce"
            style={{ animationDelay: '200ms' }}
          >
            N
          </div>
          <div className="text-amber-300 animate-bottom-bounce" style={{ animationDelay: '240ms' }}>
            G
          </div>
        </div>
      </UIModal>
    </>
  );

  {
    /*  파도타기가 어색해 보이면 다 같이 bounce 하는 애니메이션
  return (
    <>
      {!isLoading && (
        <UIModal isOpen={true}>
          <div className="flex space-x-2 text-6xl font-bold">
            <div className="text-pink-400 ">D</div>
            <div className="text-red-600 ">A</div>
            <div className="text-orange-600 ">E</div>
            <div className="text-blue-950 ">S</div>
            <div className="text-purple-800 ">A</div>
            <div className="text-orange-400 ">N</div>
            <div className="text-amber-300 ">G</div>
          </div>
        </UIModal>
      )}
    </>
  );
*/
  }
};

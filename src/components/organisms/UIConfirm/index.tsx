import { UIButton } from '../../atoms/UIButton';
import { UIFlex } from '../../atoms/UIFlex';
import { UIModal } from '../../atoms/UIModal';
import { useConfirmStore } from './store';

export const UIConfirm = () => {
  const { data, isOpen, close } = useConfirmStore();
  return (
    <>
      <UIModal isOpen={isOpen}>
        <UIFlex.Column className="px-8 py-4 pt-8 gap-3 rounded-3xl shadow shadow-neutral-400">
          <div className="font-bold text-lg">{data.title ?? '알림'}</div>
          <div className="text-md max-w-2xl break-words ">{data.message}</div>
          <div className="flex gap-5 mt-4">
            <UIButton
              onClick={() => {
                close();
                data.onConfirm?.();
              }}
            >
              {data.confirmText ?? '확인'}
            </UIButton>
            {data.cancelText && <UIButton.Red onClick={close}>{data.cancelText}</UIButton.Red>}
          </div>
        </UIFlex.Column>
      </UIModal>
    </>
  );
};

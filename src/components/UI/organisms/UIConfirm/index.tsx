import { UIButton } from '../../atoms/UIButton';
import { UIFlex } from '../../atoms/UIFlex';
import { UIModal } from '../../atoms/UIModal';
import { UIText } from '../../atoms/UIText';
import { UICard } from '../../molecules/UICard';
import { useConfirmStore } from './store';

export const UIConfirm = () => {
  const { data, isOpen, close } = useConfirmStore();
  return (
    <>
      <UIModal isOpen={isOpen}>
        <UICard title={data.title} message={data.message}>
          <UIFlex className="gap-5 mt-4">
            <UIButton
              onClick={() => {
                close();
                data.onConfirm?.();
              }}
            >
              {data.confirmText ?? '확인'}
            </UIButton>
            {data.cancelText && <UIButton.Red onClick={close}>{data.cancelText}</UIButton.Red>}
          </UIFlex>
        </UICard>
      </UIModal>
    </>
  );
};

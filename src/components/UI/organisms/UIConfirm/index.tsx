import { useEffect, useRef } from 'react';
import { UIButton } from '../../atoms/UIButton';
import { UIFlex } from '../../atoms/UIFlex';
import { UIModal } from '../../atoms/UIModal';
import { UICard } from '../../molecules/UICard';
import { useConfirmStore } from './store';

export const UIConfirm = () => {
  const { data, isOpen, close } = useConfirmStore();
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, [data]);
  return (
    <>
      <UIModal isOpen={isOpen}>
        <UICard title={data.title ?? '안내'} message={data.message} className="min-w-2xs">
          <UIFlex className="gap-5 mt-4">
            <UIButton.Submit
              ref={ref}
              onClick={() => {
                close();
                data.onConfirm?.();
              }}
            >
              {data.confirmText ?? '확인'}
            </UIButton.Submit>
            {data.cancelText && <UIButton.Red onClick={close}>{data.cancelText}</UIButton.Red>}
          </UIFlex>
        </UICard>
      </UIModal>
    </>
  );
};

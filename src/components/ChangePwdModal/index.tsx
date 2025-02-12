import { useRef } from 'react';
import { UIInput } from '../UI/atoms/UIInput';
import { UIModal } from '../UI/atoms/UIModal';
import { UICard } from '../UI/molecules/UICard';
import { UIButton } from '../UI/atoms/UIButton';

export const ChangePwdModal = ({ isOpen }: { isOpen: boolean }) => {
  const pwd = useRef('');
  return (
    <>
      <UIModal isOpen={isOpen}>
        <UICard>
          <UIInput ref={pwd}></UIInput>
          <UIButton.Submit
            onClick={() => {
              console.log(pwd.current);
            }}
          >
            테스트
          </UIButton.Submit>
        </UICard>
      </UIModal>
    </>
  );
};

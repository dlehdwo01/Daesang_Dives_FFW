import { useRef } from 'react';
import { UIInput } from '../UI/atoms/UIInput';
import { UIModal } from '../UI/atoms/UIModal';
import { UICard } from '../UI/molecules/UICard';
import { UIButton } from '../UI/atoms/UIButton';
import { UIText } from '../UI/atoms/UIText';
import { UIFlex } from '../UI/atoms/UIFlex';

export const ChangePwdModal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  const nowpwd = useRef('');
  const nextpwd = useRef('');
  const nextpwd2 = useRef('');
  return (
    <UIModal isOpen={isOpen}>
      <UICard
        className="space-y-6 mt-8 min-w-[400px] "
        title="비밀번호 변경"
        message="최초 로그인시 비밀번호 변경이 필요합니다"
      >
        <UIText.Title className="mt-2">현재 비밀번호</UIText.Title>
        <UIInput
          ref={nowpwd}
          type="password"
          placeholder="현재 비밀번호를 입력해주세요."
        ></UIInput>{' '}
        {/* 현재 비밀번호 */}
        <UIText.Title>변경할 비밀번호</UIText.Title>
        <UIInput
          ref={nextpwd}
          type="password"
          placeholder="변경할 비밀번호를 입력해주세요."
        ></UIInput>{' '}
        {/* 변경할 비밀번호 */}
        <UIText.Title>비밀번호 확인</UIText.Title>
        <UIInput
          ref={nextpwd2}
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
        ></UIInput>{' '}
        {/* 변경할 비밀번호 재확인 */}
        <UIFlex.Row.Between className="mt-6 gap-1">
          <UIButton.Submit
            onClick={() => {
              console.log(nowpwd.current);
              console.log(nowpwd.current);
              console.log(nowpwd.current);
              close();
            }}
          >
            변경하기
          </UIButton.Submit>
          {/* 취소는 본인이 직접 변경할 시에 반영  */}
          <UIButton onClick={close}>취소</UIButton>
        </UIFlex.Row.Between>
      </UICard>
    </UIModal>
  );
};

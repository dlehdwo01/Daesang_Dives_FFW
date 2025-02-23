import { UIButton } from '@/components/UI/atoms/UIButton';
import { UIFlex } from '@/components/UI/atoms/UIFlex';
import { UIInput } from '@/components/UI/atoms/UIInput';
import { UILink } from '@/components/UI/atoms/UILink';
import { UIModal } from '@/components/UI/atoms/UIModal';
import { UISelect } from '@/components/UI/atoms/UISelect';
import { UIText } from '@/components/UI/atoms/UIText';
import { UICard } from '@/components/UI/molecules/UICard';
import { UISearchBar } from '@/components/UI/molecules/UISearchBar';
import {
  UITable,
  UITableBody,
  UITableHead,
  UITd,
  UITh,
  UITr,
} from '@/components/UI/molecules/UITable/UITable';
import { useConfirmStore } from '@/components/UI/organisms/UIConfirm/store';
import { UIAdminLayout } from '@/components/UI/organisms/UILayout/admin';
import { usePopup } from '@/hooks/usePopup';
import { useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const User = () => {
  const confirm = useConfirmStore();
  const searchVal = useRef('');
  const editUser = usePopup();
  const createUser = usePopup();
  const id = useRef<string>('');
  // const grade = useRef<string>('');
  const onSearch = () => {};
  const onDelete = ({ callback }: { callback?: () => void }) => {
    console.log('클릭');
    confirm.open({
      title: '회원 삭제',
      message: '선택한 회원을 정말 삭제하시겠습니까?',
      cancelText: '취소',
      onConfirm: () => {
        confirm.open({
          title: '회원 삭제',
          message: '회원이 삭제되었습니다',
          onConfirm() {
            callback?.();
          },
        });
      },
    });
  };
  const userList = ['1', '2', '3'];
  const [checkList, setCheckList] = useState<Set<string>>(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  return (
    <UIAdminLayout.Basic
      title="유저관리"
      message="유저관리하셈<br />사번 클릭시 수정창 열림<br />비밀번호 초기화시 초기 비밀번호 1234!@#$"
    >
      <UIButton onClick={() => console.log(checkList)}>체크리스트 확인</UIButton>
      {/* 회원정보수정창 */}
      <UIModal isOpen={editUser.isOpen}>
        <UICard title="회원정보수정">
          <UIText>사번 : 90194494</UIText>
          <UIText>직급 : 팀장</UIText>
          <UIFlex.Row.BaseLine className="gap-1">
            <UIText className="whitespace-nowrap">소속 :</UIText>
            <UISelect>
              <option className="text-sm">품질경영팀</option>
              <option>영업팀</option>
            </UISelect>
          </UIFlex.Row.BaseLine>
          <UIFlex.Row className="gap-2 mt-5">
            <UIButton>비밀번호 초기화</UIButton>
            <UIButton.Red
              onClick={() => {
                onDelete({
                  callback: () => {
                    editUser.close();
                  },
                });
              }}
            >
              회원 삭제
            </UIButton.Red>
          </UIFlex.Row>

          <UIButton.Submit
            onClick={() => {
              confirm.open({
                title: '회원 수정',
                message: '회원정보가 수정되었습니다',
                onConfirm() {
                  editUser.close();
                },
              });
            }}
          >
            수정 완료
          </UIButton.Submit>
          <UIButton
            onClick={() => {
              editUser.close();
            }}
          >
            닫기
          </UIButton>
        </UICard>
      </UIModal>

      {/* 회원정보등록창 */}
      <UIModal isOpen={createUser.isOpen}>
        <UICard title="회원등록">
          <UIText>사번</UIText>
          <UIInput ref={id} />
          <UIText>직급</UIText>
          <UISelect>
            <option>사원</option>
            <option>대리</option>
            <option>과장</option>
          </UISelect>
          <UIText>소속</UIText>
          <UISelect>
            <option className="text-sm">품질경영팀</option>
            <option>영업팀</option>
          </UISelect>

          <UIButton.Submit
            onClick={() => {
              confirm.open({
                message: '회원 등록이 완료되었습니다',
                title: '회원등록',
                onConfirm() {
                  createUser.close();
                },
              });
            }}
          >
            생성 완료
          </UIButton.Submit>
          <UIButton
            onClick={() => {
              createUser.close();
            }}
          >
            닫기
          </UIButton>
        </UICard>
      </UIModal>

      <UIFlex.Column className="flex-grow gap-2 bg-amber-500 overflow-hidden p-1">
        <UIFlex.Row.Between>
          {/* 검색영역 */}
          <UISearchBar
            ref={searchVal}
            btn={'검색'}
            onSearch={onSearch}
            options={[
              { label: 'aa', value: 'aa' },
              { label: 'qqq', value: 'bb' },
              { label: 'qqqqq', value: 'dd' },
            ]}
          />
          {/* 버튼영역 */}
          <UIFlex.Row className="gap-2">
            <UIButton.Green onClick={() => createUser.open()}>등록</UIButton.Green>
            <UIButton.Red onClick={() => onDelete({})}>삭제</UIButton.Red>
          </UIFlex.Row>
        </UIFlex.Row.Between>
        <UIFlex.Column className="overflow-hidden p-1">
          {/* 테이블은 엑셀파일 확인 이후 dataset 수정 예정  */}
          <UITable>
            <UITableHead>
              <UITr>
                <UITh>사번</UITh>
                <UITh>d</UITh>
                <UITh>d</UITh>
                <UITh>d</UITh>
                <UITh>
                  <input
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={(e) => {
                      setIsAllChecked(e.target.checked);
                      e.target.checked ? setCheckList(new Set(userList)) : setCheckList(new Set());
                    }}
                  />
                </UITh>
              </UITr>
            </UITableHead>
            <UITableBody>
              {['1', '2', '3'].map((item, index) => (
                <UITr key={index}>
                  <UITd>
                    <UILink
                      to="#"
                      onClick={() => {
                        editUser.open();
                      }}
                    >
                      asd
                    </UILink>
                  </UITd>
                  <UITd>aa</UITd>
                  <UITd>aa</UITd>
                  <UITd>aa</UITd>
                  <UITd>
                    <label>
                      <input
                        type="checkbox"
                        name="asd"
                        checked={checkList.has(item)}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          setCheckList((prev) => {
                            const temp = new Set(prev);
                            if (e.target.checked) {
                              temp.add(item);
                            } else {
                              temp.delete(item);
                            }
                            if (temp.size === userList.length) {
                              setIsAllChecked(true);
                            } else {
                              setIsAllChecked(false);
                            }

                            return temp;
                          });

                          console.log(checkList);
                        }}
                      />
                    </label>
                  </UITd>
                </UITr>
              ))}
            </UITableBody>
          </UITable>
          {/* paging */}
          <UIFlex.Row.Center className="gap-2 mt-3 font-bold text-zinc-400">
            <UILink to={'/admin'}>
              <SlArrowLeft size={13} strokeWidth={50} color="oklch(0.551 0.027 264.364)" />
            </UILink>

            {/* 반복부분 */}
            <UILink to={'?page=1'}>1</UILink>
            <UILink to={'?page=2'} className="!font-bold">
              2
            </UILink>
            <UILink to={'?page=3'}>3</UILink>

            <UILink to={'/admin'}>
              <SlArrowRight size={13} strokeWidth={50} color="oklch(0.551 0.027 264.364)" />
            </UILink>
          </UIFlex.Row.Center>
        </UIFlex.Column>
      </UIFlex.Column>
    </UIAdminLayout.Basic>
  );
};
export default User;

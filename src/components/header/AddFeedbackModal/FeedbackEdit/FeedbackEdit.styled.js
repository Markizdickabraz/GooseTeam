import styled from 'styled-components';

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  `;

export const RatingText = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
  `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 24px;
  color: rgba(52, 52, 52, 0.8);
  `;

export const CommentText = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: rgba(246, 246, 246, 1);
  border: 1px solid #343434;
  border-radius: 8px;
  margin-top: 8px;
  resize: none;
  padding-top: 14px;
  padding-left: 18px;
  color: #343434;
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #343434;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const BtnEdit = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 48px;
  width: 198px;
  margin-top: 18px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  /* transition: ; */

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #3E85F3;
  }
`;

export const BtnEditText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

export const BtnCancel = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 48px;
  width: 198px;
  margin-top: 18px;
  cursor: pointer;
  background: #E5EDFA;
  border: none;
  border-radius: 8px;
  /* transition: ; */

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #E5EDFA;
  }
`;

export const BtnCancelText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #343434;
`;



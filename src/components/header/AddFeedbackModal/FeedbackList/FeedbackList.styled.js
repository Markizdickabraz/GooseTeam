import styled from 'styled-components';

export const EditWrapper = styled.div`
 position: relative;
 width: 100%;
`;

export const BtnSvgWrapper = styled.div`
 display: flex;
 position: absolute;
 top: 36px;
 right: 15px;
 gap: 8px;
`;

export const BtnPencil = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background: #DCEBF7;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #3e85f3;
  }
`;
  
export const BtnPencilIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: #3E85F3;

  &:hover,
  &:focus {
    stroke: #FFFFFF;
  }
`;

export const BtnTrash = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background: #FFD2DD;
  cursor: pointer;
`;

export const BtnTrashIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: #EA3D65;

  &:hover,
  &:focus {
    stroke: #EA3D65;
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

export const CommentTextList = styled.textarea`
  width: 404px;
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

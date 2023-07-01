import  styled  from 'styled-components';
import { taskColors, buttonColors } from '../../styles/variables';

const Label = styled.label`
  display: block;
  width: 100%;

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  color: #343434cc;
`;

const Input = styled.input`
  display: block;
  min-width: 10px;
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 8px;
  background-color: #f6f6f6;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: #343434;

  border: none;
  outline: none;

  margin-top: 8px;

  @media screen and (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 18px;
    padding-right: 18px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 15px;
  max-width: 267px;

  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 375px) {
    width: 267px;
  }

  @media screen and (min-width: 768px) {
    gap: 14px;
    width: 340px;
    max-width: 340px;
    margin-top: 18px;
    margin-bottom: 28px;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-left: 3px;
  margin-bottom: 32px;
`;

const RadioButton = styled.input`
  visibility: hidden;
  opacity: 0;
  position: absolute;

  &:checked + label::before {
    outline: 3px solid ${taskColors.priorityLow + '80'};
  }

  &:checked + label[for='medium']::before {
    outline-color: ${taskColors.priorityMedium + '80'};
  }

  &:checked + label[for='high']::before {
    outline-color: ${taskColors.priorityHigh + '80'};
  }
`;

const RadioLabel = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: #343434;

  &::before {
    content: '';
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${taskColors.priorityLow};
    border: 1px solid white;
    margin-right: 5px;

    @media screen and (min-width: 768px) {
      width: 11px;
      height: 11px;
    }
  }

  &[for='medium']::before {
    background-color: ${taskColors.priorityMedium};
  }

  &[for='high']::before {
    background-color: ${taskColors.priorityHigh};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const buttonPlaceholder = `
  width: 100%;
  padding: 8px;
  border-radius: 8px;

  border: none;
  outline: none;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  ${buttonPlaceholder}
  color: ${buttonColors.white};
  background-color: ${buttonColors.blue};
`;

const LightButton = styled.button`
  ${buttonPlaceholder}
  color: #111111;
  background-color: #efefef;
`;

const Err = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  color: red;
`;

export {
  Label,
  Input,
  TimeContainer,
  RadioContainer,
  RadioButton,
  RadioLabel,
  ButtonContainer,
  Button,
  LightButton,
  Err,
};

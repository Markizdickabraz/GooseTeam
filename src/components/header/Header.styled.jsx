import styled from 'styled-components';
import { fontColors, iconColors, backgroundColors } from 'styles/variables';
import { BREAKPOINTS } from 'styles/deviceWidth';
import facepaint from 'facepaint';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const Wrapper = styled.header`
  background-color: ${backgroundColors.grey};
  padding-top: 24px;
  padding-bottom: 24px;

  ${media({
    paddingTop: ['24px', '24px', '40px'],
    paddingBottom: ['24px', '24px', '40px'],
  })}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  ${media({
    width: ['375px', '768px', '1024px'],
    paddingLeft: ['20px', '20px', '20px'],
    paddingRight: ['20px', '20px', '20px'],
  })}
`;

export const LeftSubsection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${media({
    display: ['none', 'none', 'flex'],
  })}
`;

export const GooseImg = styled.img`
  width: 64px;
  height: 60px;

  ${media({
    width: ['64px', '64px', '64px'],
    height: ['60px', '60px', '60px'],
  })}
`;

export const RightSubsection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  ${media({
    gap: ['18px', '18px', '24px'],
  })}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${media({
    gap: ['8px', '8px', '14px'],
  })}
`;

export const SectionTitle = styled.h1`
  color: ${fontColors.black};
  display: block;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  ${media({
    fontSize: ['32px', '32px', '32px'],
  })}
`;

export const Toggler = styled.svg`
  fill: transparent;
  stroke: ${iconColors.black};
  margin-right: 8px;

  height: 24px;
  width: 24px;

  ${media({
    height: ['24px', '24px', '34px'],
    width: ['24px', '24px', '34px'],
    marginRight: ['8px', '8px', '16px'],
  })}

  ${media({
    display: ['none', 'none', 'none'],
  })}
`;

export const MotivationTask = styled.p`
  color: ${fontColors.black};

  display: block;
  font-family: 'Inter';

  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;

  ${media({
    fontSize: ['14px', '14px', '14px'],
  })}
`;

export const FeedbackBtn = styled.button`
  background: ${backgroundColors.blue};
  border-radius: 10px;
  padding: 8px 20px;
  border: none;
  color: ${fontColors.white};
  text-align: center;
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  line-height: 16px;

  ${media({
    borderRadius: ['10px', '10px', '14px'],
    padding: ['8px 20px', '8px 20px', '12px 32px'],
    fontSize: ['12px', '12px', '14px'],
    lineHeight: ['16px', '16px', '18px'],
  })}
`;


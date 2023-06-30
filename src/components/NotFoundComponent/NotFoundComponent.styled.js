import styled from 'styled-components';
import { Link } from 'react-router-dom';

const media = {
  mobile: '@media screen and (max-width: 767px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const Box404 = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  width: 252px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 285px;

  ${media.tablet} {
    height: 250px;
    width: 503px;
    margin-top: 364px;
  }

  ${media.desktop} {
    height: 250px;
    width: 503px;
    margin-top: 302px;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  width: 81px;
  height: 188px;
  transform: translate(-50%, -40%) rotate(-31deg);

  ${media.tablet} {
    width: 178px;
    height: 414px;
    transform: translate(-50%, -40%) rotate(-31.56deg);
  }
`;

export const Number = styled.p`
  color: #3e85f3;
  font-size: 100px;
  font-weight: 700;
  line-height: 150px;

  ${media.tablet} {
    font-size: 200px;
    font-weight: 700;
    line-height: 250px;
  }
`;

export const HomePage = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding-top: 40px;
  color: rgba(17, 17, 17, 0.7);
  &:focus {
    color: #3e85f3;
    font-size: 20px;
  }
  &:hover {
    color: #3e85f3;
    font-size: 20px;
  }
`;

export const Error = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  color: rgba(17, 17, 17, 0.7);
  text-align: center;
  margin-left: auto;
  margin-right: autox;
  margin-top: 28px;
  padding: 0px 40px;
  ${media.tablet} {
    margin-top: 80px;
  }
`;

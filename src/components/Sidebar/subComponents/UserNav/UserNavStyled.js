import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themeColors, iconColors } from 'styles/variables';

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const StyledLink = styled(NavLink)`
  color: ${themeColors.sidebarLabel};
  width: 185px;

  font-weight: 600;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;

   &:hover,
  &:focus {
    color: ${iconColors.blue};
    

    & > svg {
      fill: transparent;
      stroke: ${iconColors.blue};
    }
  }

  & > svg {
      fill: transparent;
      stroke: ${themeColors.sidebarLabel};
    }
  &.active {
    color: ${themeColors.sidebarSvg};
    background-color: ${themeColors.sidebarActiveBackground};

    & > svg {
      fill: transparent;
      stroke: ${themeColors.sidebarSvg};
    }
  }

  @media (min-width: 765px) {
    font-size: 16px;
    padding: 16px 20px;
    width: 225px;
  }

  @media (min-width: 1087px) {
    width: 241px;
  }
`;

export const NavIcon = styled.svg`
  stroke: ${themeColors.sidebarSvg};

  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (min-width: 765px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

export const NavIconChart = styled.svg`

  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (min-width: 765px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

export const StyledLinkStatistic = styled(NavLink)`
  color: ${themeColors.sidebarLabel};
  width: 185px;

  font-weight: 600;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: ${iconColors.blue};
    

    & > svg {
      fill: ${iconColors.blue};
    }
  }

  & > svg {
      fill: ${themeColors.sidebarLabel};
    }
  &.active {
    color: ${themeColors.sidebarSvg};
    background-color: ${themeColors.sidebarActiveBackground};

    & > svg {
      fill: ${themeColors.sidebarSvg};
    }
  }
   @media (min-width: 765px) {
    font-size: 16px;
    padding: 16px 20px;
    width: 225px;
  }

  @media (min-width: 1087px) {
    width: 241px;
  }
`;
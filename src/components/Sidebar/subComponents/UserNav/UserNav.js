import sprite from 'images/svg/sprite.svg';
import { NavList, StyledLink, NavIcon, StyledLinkStatistic } from './UserNavStyled';
 import { account, calendar, statistics } from '../../../../services/routes';


import { useMediaQuery } from 'react-responsive';

const UserNav = ({ onLinkClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 1439 });

  const handleLinkClick = () => {
    if (isMobile) {
      onLinkClick();
    }
  };
  
  return (
    <>
      <NavList>
        <StyledLink to={account} onClick={handleLinkClick}>
          <NavIcon>
            <use href={`${sprite}#user-check`} />
          </NavIcon>
          <span>My account</span>
        </StyledLink>
        <StyledLink to={calendar} onClick={handleLinkClick}>
          <NavIcon>
            <use href={`${sprite}#calendar-check`} />
          </NavIcon>
          <span>Calendar</span>
        </StyledLink>
        <StyledLinkStatistic to={statistics} onClick={handleLinkClick}>
          <NavIcon>
            <use href={`${sprite}#chart`} />
          </NavIcon>
          <span>Statistics</span>
        </StyledLinkStatistic>
      </NavList>
    </>
  );
};

export default UserNav;
import sprite from 'shared/icons/sprite.svg';
import { NavList, StyledLink, NavIcon } from './UserNavStyled';
//додати відповідні шляхи
import { account, calendar } from 'routes';

const UserNav = () => {
  
  return (
    <>
      <NavList>
        <StyledLink
          to={account}
          //onClick={}
        >
          <NavIcon>
            <use href={`${sprite}#user-check`} />
          </NavIcon>
          <span>My account</span>
        </StyledLink>
        <StyledLink
          to={calendar}
          //onClick
        >
          <NavIcon>
            <use href={`${sprite}#calendar-check`} />
          </NavIcon>
          <span>Calendar</span>
        </StyledLink>
      </NavList>
    </>
  );
};

export default UserNav;
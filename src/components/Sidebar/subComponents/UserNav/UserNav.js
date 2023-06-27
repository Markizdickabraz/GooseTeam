import sprite from 'images/svg/sprite.svg';
import { NavList, StyledLink, NavIcon } from './UserNavStyled';
//додати відповідні шляхи
// import { account, calendar, statistics } from 'routes';

// тимчасове рішення)
const account = "/account";
const calendar = "/calendar";
const statistics = "/statistics";

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
         <StyledLink
          to={statistics}
          //onClick
        >
          <NavIcon>
            <use href={`${sprite}#chart`} />
          </NavIcon>
          <span>Statistics</span>
        </StyledLink>
      </NavList>
    </>
  );
};

export default UserNav;
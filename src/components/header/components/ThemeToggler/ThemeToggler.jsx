import sprite from '../../../../images/svg/sprite.svg';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  return (
    <div>
      <ToggleButton>
        <ThemeIcon>
          <use href={`${sprite}#moon`} />
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};

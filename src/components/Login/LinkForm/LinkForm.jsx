import React from 'react';
import { StyledLink } from './LinkForm.styled';

const LinkForm = ({ path, text }) => {
  return (
    <StyledLink to={path}>
      {text}
    </StyledLink>
  );
};

export default LinkForm;

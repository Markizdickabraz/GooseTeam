export const validateFormLogin = values => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^.{6,}$/;

  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Password must be at least 6 characters long.';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
};
export const validateFormSignUp = values => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nameRegex = /^[A-Za-z]{2,}$/;
  const passwordRegex = /^.{6,}$/;

  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (!nameRegex.test(values.name)) {
    errors.name = 'Name must contain at least 2 letters.';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Password must be at least 6 characters long.';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
};

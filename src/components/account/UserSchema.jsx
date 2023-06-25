import * as Yup from 'yup';

const dateReg = /^\d{4}-\d{2}-\d{2}$/;
const phoneReg = /^\+?\d{1,3}\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

export const UserSchema = Yup.object().shape({
  avatar: Yup.mixed(),
  username: Yup.string()
    .min(2, 'Too short!')
    .max(16, 'Too long!')
    .required('Required'),
  birthday: Yup.string()
    .matches(dateReg, 'Invalid date of birth')
    .test(
      'max-date',
      'Date of birth cannot be in the future',
      function (value) {
        return !value || new Date(value) <= new Date();
      }
    )
    .required('Required'),
  email: Yup.string().email('This is an ERROR email').required('Required'),
  phone: Yup.string()
    .matches(phoneReg, 'This is an ERROR phone')
    .required('Required'),
  skype: Yup.string().min(2, 'Too short!').max(16, 'Too long!'),
});

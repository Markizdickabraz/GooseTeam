import * as Yup from 'yup';
import { parseDateString } from './helpers/date';

const dateReg = /^((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/\d{4})$/;
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
        const parsedNewDate = new Date(parseDateString(value));
        return !value || parsedNewDate <= new Date();
      }
    )
    .required('Required'),
  email: Yup.string().email('This is an ERROR email').required('Required'),
  phone: Yup.string()
    .matches(phoneReg, 'This is an ERROR phone')
    .required('Required'),
  skype: Yup.string().min(2, 'Too short!').max(16, 'Too long!'),
});

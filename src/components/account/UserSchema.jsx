import * as Yup from 'yup';

const dateReg = /^\d{4}-\d{2}-\d{2}$/;
const phoneReg =
  /^(\+?3?8?0?)?[-.\s]?(\(?[0-9]{3}\)?[-.\s]?){2}[-.\s]?[0-9]{2}[-.\s]?[0-9]{2}$/;
const maxDate = new Date();
maxDate.setHours(23, 59, 59, 999);

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
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(phoneReg, 'Invalid phone').required('Required'),
  skype: Yup.string().min(2, 'Too short!').max(16, 'Too long!'),
});

import { CustomInput } from 'components/account/CustomInput';
import { Formik } from 'formik';
import { FormContainer } from './Account.styled';
import { UserSchema } from './UserSchema';
import Thumb from './Avatar';

export const UserForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          birthday: '',
          email: '',
          phone: '',
          skype: '',
          avatar: '',
        }}
        validationSchema={UserSchema}
        onSubmit={values => {
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }

          for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <FormContainer>
            <div style={{ textAlign: 'center' }}>
              <Thumb file={values.avatar} setFieldValue={setFieldValue} />

              <p style={{ marginTop: 18 }}>Nadiia Doe</p>
              <p style={{ marginTop: 4 }}>User</p>
            </div>

            <CustomInput label="User Name" name="username" />

            <CustomInput label="Birthday" name="birthday" type="date" />

            <CustomInput label="Email" name="email" type="email" />

            <CustomInput label="Phone" name="phone" type="tel" />

            <CustomInput label="Skype" name="skype" />

            <button type="submit">Save changes</button>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

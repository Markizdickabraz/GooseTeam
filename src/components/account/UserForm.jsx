import { CustomInput } from 'components/account/CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import { FormContainer } from './Account.styled';
import { UserSchema } from './UserSchema';

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
          console.log(values);
        }}
      >
        <FormContainer>
          <div style={{ textAlign: 'center' }}>
            <img alt="avatar" src="" />

            <label htmlFor="avatar">Choose images to upload (PNG, JPG)</label>
            <Field
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
            <ErrorMessage name="avatar" component="div" />

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
      </Formik>
    </>
  );
};

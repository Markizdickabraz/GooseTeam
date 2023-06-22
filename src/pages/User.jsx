import { CustomInput } from 'components/account/CustomInput';
import { Formik, Form } from 'formik';

const User = () => {
  return (
    <div style={{ padding: 18 }}>
      <div style={{ textAlign: 'center' }}>
        <img alt="avatar" src="" />

        <p style={{ marginTop: 18 }}>Nadiia Doe</p>
        <p style={{ marginTop: 4 }}>User</p>
      </div>

      <Formik
        initialValues={{
          username: '',
          birthday: '',
          email: '',
          phone: '',
          skype: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            marginTop: 40,
          }}
        >
          <CustomInput label="User Name" name="username" />

          <CustomInput label="Birthday" name="birthday" type="date" />

          <CustomInput label="Email" name="email" type="email" />

          <CustomInput label="Phone" name="phone" type="tel" />

          <CustomInput label="Skype" name="skype" />

          <button type="submit">Save changes</button>
        </Form>
      </Formik>
    </div>
  );
};

export default User;

import { CustomInput } from 'components/account/CustomInput';
import { Formik } from 'formik';
import { FormContainer, FormWrapper, UserInfo } from './styles/Account.styled';
import { UserSchema } from './UserSchema';
import Thumb from './Avatar';
import { DatePickerField } from './Calendar';
import { Button } from 'styles/components';
import { useState } from 'react';

export const UserForm = () => {
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleSubmit = values => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    setIsFormDirty(false);
  };
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
        onSubmit={handleSubmit}
        onChange={() => setIsFormDirty(true)}
      >
        {({ values, setFieldValue }) => (
          <FormContainer>
            <UserInfo>
              <Thumb
                file={values.avatar}
                setFieldValue={setFieldValue}
                setIsFormDirty={setIsFormDirty}
              />

              <p>Nadiia Doe</p>
              <p>User</p>
            </UserInfo>

            <FormWrapper>
              <div>
                <CustomInput
                  setIsFormDirty={setIsFormDirty}
                  label="User Name"
                  name="username"
                />

                <DatePickerField
                  name="birthday"
                  setFieldValue={setFieldValue}
                  setIsFormDirty={setIsFormDirty}
                />

                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  setIsFormDirty={setIsFormDirty}
                />
              </div>

              <div>
                <CustomInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  setIsFormDirty={setIsFormDirty}
                />

                <CustomInput
                  label="Skype"
                  name="skype"
                  setIsFormDirty={setIsFormDirty}
                />
              </div>
            </FormWrapper>

            <Button
              style={{
                cursor: isFormDirty ? 'pointer' : 'auto',
                margin: '0 auto',
              }}
              type={isFormDirty ? 'submit' : 'button'}
              disabled={!isFormDirty}
            >
              Save changes
            </Button>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

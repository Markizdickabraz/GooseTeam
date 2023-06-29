import { CustomInput } from 'components/account/CustomInput';
import { Formik } from 'formik';
import { FormContainer, FormWrapper, UserInfo } from './styles/Account.styled';
import { UserSchema } from './UserSchema';
import Thumb from './Avatar';
import { DatePickerField } from './Calendar';
import { Button } from 'styles/components';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Input } from './styles/CustomInput.styled';

export const UserForm = () => {
  const { name, email, phone, birthday, skype, avatarURL } = useAuth();
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

  const initialValues = {
    username: name ? name : '',
    birthday: birthday ? birthday : '',
    email: email ? email : '',
    phone: phone ? phone : '',
    skype: skype ? skype : '',
    avatar: '',
  };

  return (
    <>
      {name && (
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}
          onChange={() => setIsFormDirty(true)}
        >
          {({ values, setFieldValue }) => (
            <FormContainer>
              <UserInfo>
                <Thumb
                  avatar={avatarURL}
                  file={values.avatar}
                  setFieldValue={setFieldValue}
                  setIsFormDirty={setIsFormDirty}
                />

                <p>{name}</p>
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

                  <Input name="email" type="email" disabled />
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
      )}
    </>
  );
};

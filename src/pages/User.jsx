import { backgroundColors } from 'styles/variables';
import { UserForm } from '../components/account/UserForm';

const User = () => {
  return (
    <div
      style={{
        padding: 18,
        // background: backgroundColors.secondBackground,
      }}
    >
      <UserForm />
    </div>
  );
};

export default User;

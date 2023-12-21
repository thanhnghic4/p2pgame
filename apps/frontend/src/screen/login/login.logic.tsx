import { useState } from 'react';
import type {
  IBaseFormInputEvent,
  IBaseFormSubmitEvent,
  LoginFormProps,
} from './login.interfaces';
import { useHistory } from 'react-router-dom';

export const LoginLogicHandler = (
  WrappedComponent: React.ComponentType<LoginFormProps>,
) => {
  return () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleNavigateToRegister = () => {
      history.push('/register');
    };

    const handleEmailChange = (e: IBaseFormInputEvent) => {
      setEmail(e.target.value as string);
    };

    const handlePasswordChange = (e: IBaseFormInputEvent) => {
      setPassword(e.target.value as string);
    };

    const handleSubmit = (e: IBaseFormSubmitEvent) => {
      console.log(email);
      console.log(password);
      e.preventDefault();
      setEmail('');
      setPassword('');
    };

    return (
      <WrappedComponent
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        onNavigateToRegister={handleNavigateToRegister}
      />
    );
  };
};

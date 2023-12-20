import { useState } from 'react';
import type {
  IBaseFormInputEvent,
  IBaseFormSubmitEvent,
} from './login.interfaces';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CentralizedDiv, VerticalCentralRightAlignDiv } from '../../common';

interface WithLoginFormProps {
  email: string;
  password: string;
  onSubmit: (e: IBaseFormSubmitEvent) => void;
  onEmailChange: (e: IBaseFormInputEvent) => void;
  onPasswordChange: (e: IBaseFormInputEvent) => void;
  onNavigateToRegister: () => void;
}

const withLoginForm = (
  WrappedComponent: React.ComponentType<WithLoginFormProps>,
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

const LoginWrapper = styled(CentralizedDiv)`
  width: 100vw;
  height: 100vh;
  font-size: 17px;
  color: white;
`;

const LoginBackground = styled(CentralizedDiv)`
  background-image: url(login-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const FormWrapper = styled(VerticalCentralRightAlignDiv)`
  background: rgba(70, 130, 180, 0.5);
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.1),
    0 6px 20px 0 rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  margin: 0 5px;
  padding-right: 15%;
  color: white;
  width: 100vw;
  height: 300px;
  .form-style {
    height: fit-content;
  }
`;

const RowWrapper = styled.div`
  width: 300px;
  padding-top: 16px;
`;

const ButtonWrapper = styled(RowWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLabelInput = styled.div`
  width: 100%;
  padding-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: inherit;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const StyledButton = styled.button`
  appearance: button;
  font-size: inherit;
  font-family: inherit;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow:
    rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0,
    rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition:
    all 0.2s,
    box-shadow 0.08s ease-in;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 48%;
  &:hover {
    box-shadow:
      rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0,
      rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

const LoginForm = ({
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onNavigateToRegister,
  email,
  password,
}: WithLoginFormProps) => {
  return (
    <LoginWrapper>
      <LoginBackground>
        <FormWrapper>
          <form className="form-style" onSubmit={onSubmit}>
            <RowWrapper>
              <StyledLabelInput>Email</StyledLabelInput>
              <StyledInput
                type="email"
                value={email}
                onChange={onEmailChange}
                required
              />
            </RowWrapper>
            <RowWrapper>
              <StyledLabelInput>Password</StyledLabelInput>
              <StyledInput
                type="password"
                value={password}
                onChange={onPasswordChange}
                required
              />
            </RowWrapper>
            <ButtonWrapper>
              <StyledButton role="button">Login</StyledButton>
              <StyledButton role="button" onClick={onNavigateToRegister}>
                Register
              </StyledButton>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </LoginBackground>
    </LoginWrapper>
  );
};

const LoginScreen = withLoginForm(LoginForm);

export default LoginScreen;

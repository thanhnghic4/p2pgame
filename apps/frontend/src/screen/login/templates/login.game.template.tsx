import styled from 'styled-components';
import { BaseButton, CentralizedDiv } from '../../../common';
import type { LoginFormProps } from '../login.interfaces';

const LoginWrapper = styled(CentralizedDiv)`
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const LoginBackground = styled(CentralizedDiv)`
  background-image: url(gaming-console-background.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: #040404;
  height: 100%;
  width: 100%;
  @media (min-width: 1068px) {
    background-size: cover;
  }
`;

const FormWrapper = styled(CentralizedDiv)`
  background: rgba(20, 22, 20, 0.4);
  box-shadow:
    0 4px 8px 0 rgba(255, 255, 255, 0.1),
    0 6px 20px 0 rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 5px;
  color: white;
  width: 380px;
  height: fit-content;
  padding: 50px 35px 35px 35px;
  .form-style {
    height: 100%;
    width: 100%;
  }
`;

const RowWrapper = styled.div`
  width: 100%;
  padding-top: 16px;
`;

const LoginTitle = styled(RowWrapper)`
  font-size: 42px;
  font-weight: inherit;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 0px;
`;

const ButtonWrapper = styled(RowWrapper)`
  display: block;
`;

const StyledLabelInput = styled.div`
  width: 100%;
  padding-bottom: 16px;
  padding-top: 10px;
`;

const StyledInput = styled.input`
  width: 360px;
  height: 57px;
  padding: 0 10px;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  &:focus {
    outline: none;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const StyledButton = styled(BaseButton)`
  font-size: inherit;
  font-weight: inherit;
  height: 57px;
  width: 100%;
  padding: 0 15px;
  margin-top: 20px;
  color: white;
  background-color: black;
  border: 1px solid rgba(255, 255, 255, 0.3);
  &:hover,
  &:focus {
    background-color: lightgray;
    color: black;
    box-shadow: none;
  }
`;

export const GameTemplate = ({
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onNavigateToRegister,
  email,
  password,
}: LoginFormProps) => {
  return (
    <LoginWrapper>
      <LoginBackground>
        <FormWrapper>
          <form className="form-style" onSubmit={onSubmit}>
            <LoginTitle>Login</LoginTitle>
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
              <StyledButton style={{ marginBottom: '16px' }} role="button">
                Login
              </StyledButton>
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

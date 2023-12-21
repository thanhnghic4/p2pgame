import styled from 'styled-components';
import type { LoginFormProps } from '../login.interfaces';
import {
  CentralizedDiv,
  VerticalCentralRightAlignDiv,
  BaseButton,
} from '../../../common';

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
  height: 100%;
  width: 100%;
`;

const FormWrapper = styled(VerticalCentralRightAlignDiv)`
  background: rgba(70, 130, 180, 0.5);
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.1),
    0 6px 20px 0 rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  margin: 0 5px;
  padding-right: 20%;
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

const StyledButton = styled(BaseButton)`
  color: #fff;
  background-color: #405cf5;
  height: 44px;
  width: 48%;
`;

export const DefaultTemplate = ({
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

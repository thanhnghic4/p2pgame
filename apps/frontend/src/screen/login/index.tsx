import { LoginLogicHandler } from './login.logic';
import { DefaultTemplate, GameTemplate } from './templates';
import { type ILoginScreenProps, LoginTemplateEnum } from './login.interfaces';

export * from './login.interfaces';

const LoginScreen = ({ template }: ILoginScreenProps) => {
  const getTemplate = () => {
    switch (template) {
      case LoginTemplateEnum.GAMING:
        return GameTemplate;
      default:
        return DefaultTemplate;
    }
  };

  return LoginLogicHandler(getTemplate())();
};

export default LoginScreen;

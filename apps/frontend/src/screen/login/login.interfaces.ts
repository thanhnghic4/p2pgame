export interface IBaseFormInputEvent {
  target: {
    value: string | number;
  };
}
export interface IBaseFormSubmitEvent {
  preventDefault: () => void;
}
export interface LoginFormProps {
  email: string;
  password: string;
  onSubmit: (e: IBaseFormSubmitEvent) => void;
  onEmailChange: (e: IBaseFormInputEvent) => void;
  onPasswordChange: (e: IBaseFormInputEvent) => void;
  onNavigateToRegister: () => void;
}

export enum LoginTemplateEnum {
  GAMING,
}

export interface ILoginScreenProps {
  template?: LoginTemplateEnum;
}

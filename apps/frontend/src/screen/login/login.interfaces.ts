export interface IBaseFormInputEvent {
  target: {
    value: string | number;
  };
}
export interface IBaseFormSubmitEvent {
  preventDefault: () => void;
}

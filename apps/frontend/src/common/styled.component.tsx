import styled from 'styled-components';

export const CentralizedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerticalCentralDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const VerticalCentralRightAlignDiv = styled(VerticalCentralDiv)`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const BaseButton = styled.button`
  appearance: button;
  font-size: inherit;
  font-family: inherit;
  backface-visibility: hidden;
  border-radius: 6px;
  border-width: 0;
  box-shadow:
    rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0,
    rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  cursor: pointer;
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

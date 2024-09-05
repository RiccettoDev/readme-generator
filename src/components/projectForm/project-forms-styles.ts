import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 48px;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 55%;
  left: 12px;
  transform: translateY(-50%);
  color: #00d9ff;
  font-size: 20px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20%;
  width: 80%;
  height: 48px;
  background-color: #104f6b;
  border: none;
  border-radius: 20px;
  color: #00d9ff;
  font-size: 18px;

  &::placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00A7FFC0;
    font-weight: bold;
    font-size: 18px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 24px;
  color: #00d9ff;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 8px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  border-radius: 5%;
  width: 50%;
  height: 70%;
  background-color: #2176a5;
  border: 2px solid #00d9ff;
  box-shadow: 0px 0px 15px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
    height: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 50%;
    margin-right: 15px;
  }
`;

export const LogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 35%;
  height: 25%;
  background-color: #2176a5;
  border: 2px solid #00d9ff;
  box-shadow: 0px 0px 15px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 50%;
    height: 20%;
  }

  @media (max-width: 480px) {
    width: 30%;
    height: 15%;
  }
`;

export const Img = styled.img`
  width: 80%;
  height: 80%;

  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: 90%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    width: 80%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 48px;

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 65px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 45px;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 55%;
  left: 12px;
  transform: translateY(-50%);
  color: #00d9ff;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
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

  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;
    padding-left: 10%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
    padding-left: 20%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 62px;
  background-color: #104f6b;
  border: none;
  border-radius: 20px;
  color: #00A7FFC0;

  &:hover {
    background-color: #2176a5;
    border: 2px solid #00d9ff;
    box-shadow: 0px 0px 15px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
    color: white;
  }

  &:active {
    scale: calc(80%);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 48px;
  }
`;

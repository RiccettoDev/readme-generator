import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #104f6b;
  position: absolute;
  border: 2px solid #00d9ff;
  box-shadow: 0px 0px 15px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  border-radius: 10%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 75%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px;
  color: #104f6b;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #00d9ff;
  position: absolute;
  top: 3em;
  right: 4em;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-right: -1em;
  }

  @media (max-width: 480px) {
    margin-top: -1.5em;
    margin-right: -2.5em;
  }
`;

export const Input = styled.input`
  width: 50%;
  padding: 8px;
  margin: 8px 0;
  border: 2px solid #00d9ff;
  border-radius: 4px;
  font-size: 16px;
  background-color: #1b6992;
  color: #CCCCCC;

  &::placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #CCCCCC;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const SaveButton = styled.button`
  width: 80% ;
  padding: 10px 20px;
  background-color: #00d9ff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  color: #008ecf;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 48px;

  &:hover {
    background-color: #008ecf;
    color: #CCCCCC;
  }
`;

export const Select = styled.select`
  width: 52%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
  background-color: #1b6992;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  color: #CCCCCC;
  font-size: 14px;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #00d9ff;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  
  &:hover {
    background-color: #007bb5;
  }
`;

export const ContainerMarkdown = styled.div`
  width: 90%;
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #104f6b;
  position: absolute;
  border: 2px solid #00d9ff;
  box-shadow: 0px 0px 15px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  border-radius: 10%;

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 1em;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-right: 1em;
  }
`;

export const CopyButton = styled.button`
  padding: 10px 20px;
  background-color: #00d9ff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  color: #008ecf;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;

  &:hover {
    background-color: #008ecf;
    color: #CCCCCC;
  }

  @media (max-width: 768px) {
    margin-top: -2em;
  }

  @media (max-width: 480px) {
    margin-top: -1em;
  }
`;
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
  height: 80%;
  background-color: #2176a5;
  border: 2px solid #00d9ff;
  box-shadow: 0px 0px 15px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  position: relative;

  /* Primeiro pseudo-elemento para o primeiro brilho */
  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 217, 255, 0));
    border-radius: 50%;
    box-shadow: 0px 0px 15px 10px rgba(255, 255, 255, 0.5);
    
    /* Animação para o primeiro brilho */
    animation: moveAround 40s linear infinite;
  }

  /* Segundo pseudo-elemento para o segundo brilho */
  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 217, 255, 0));
    border-radius: 50%;
    box-shadow: 0px 0px 15px 10px rgba(255, 255, 255, 0.5);
    
    /* Animação para o segundo brilho */
    animation: moveAroundReverse 40s linear infinite;
  }

  /* Animação para o brilho que se move no sentido horário */
  @keyframes moveAround {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: 0;
      left: 100%;
      transform: translateX(-100%);
    }
    50% {
      top: 100%;
      left: 100%;
      transform: translate(-100%, -100%);
    }
    75% {
      top: 100%;
      left: 0;
      transform: translateY(-100%);
    }
    100% {
      top: 0;
      left: 0;
    }
  }

  /* Animação para o brilho que se move no sentido anti-horário */
  @keyframes moveAroundReverse {
    0% {
      top: 100%;
      left: 100%;
      transform: translate(-100%, -100%);
    }
    25% {
      top: 100%;
      left: 0;
      transform: translateY(-100%);
    }
    50% {
      top: 0;
      left: 0;
    }
    75% {
      top: 0;
      left: 100%;
      transform: translateX(-100%);
    }
    100% {
      top: 100%;
      left: 100%;
      transform: translate(-100%, -100%);
    }
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
`;

export const Img = styled.img`
  width: 80%;
  height: 80%;
`;

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
`;
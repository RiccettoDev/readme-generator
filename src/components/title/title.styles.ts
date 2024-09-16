import styled from 'styled-components';

// Defina uma interface para as propriedades personalizadas
interface LetterProps {
  delay: string;
}

export const Container = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-right: 10px;
  }
`;

export const Letter = styled.h1<LetterProps>`
  font-size: 48px;
  font-weight: bold;
  color: gray;
  animation: light 2s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}; /* Controla o atraso da animação para cada letra */

  @keyframes light {
    0%, 100% {
      color: gray;
      text-shadow: none;
    }
    50% {
      color: #FFF;
      text-shadow: 0 0 12px #00d9ff, 0 0 50px #00d9ff, 0 0 100px #00d9ff;
    }
  }

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

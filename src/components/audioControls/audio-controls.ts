import styled from 'styled-components';

export const AudioContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: #104f6b;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  
  audio {
    width: 100%;
    border-radius: 5px;
    outline: none;
  }

  audio::-webkit-media-controls-panel{
    background-color: red;
  }
`;

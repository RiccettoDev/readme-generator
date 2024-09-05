import { useRef, useState } from "react";
import {
  AudioButton,
  Button,
  Container,
  Img,
  Input,
  InputContainer,
  InputIcon,
  InputWrapper,
  LogContainer,
  SubContainer
} from "./home-styles";
import { Title } from "../../components/title";
import { IoVolumeMediumSharp, IoVolumeMute } from "react-icons/io5";

import backgroundMusic from '../../../public/background-music.mp3'

import logo from '../../assets/icon-readme.png'
import iconName from '../../assets/icon-user.png'
import iconDescription from '../../assets/icon-description.png'

export function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Container>
      <audio
        src={backgroundMusic}
        autoPlay
        loop
        ref={audioRef}
        muted={isMuted} // Controla o mudo com base no estado
      />
      <AudioButton onClick={handleMuteToggle}>
        {isMuted ? <IoVolumeMediumSharp size={30} color="#00d9ff" /> : <IoVolumeMute size={30} color="#00d9ff" />}
      </AudioButton>
      <Title />
      <SubContainer>
        <LogContainer>
          <Img src={logo} alt="logo" />
        </LogContainer>
        <InputContainer>
          <InputWrapper>
            <InputIcon>
              <Img src={iconName} alt="icon name" />
            </InputIcon>
            <Input placeholder="Digite o nome do projeto" />
          </InputWrapper>
          <InputWrapper>
            <InputIcon>
              <Img src={iconDescription} alt="icon name" />
            </InputIcon>
            <Input placeholder="Digite a descrição do projeto" />
          </InputWrapper>
        </InputContainer>
        <Button>
          <h1>Create</h1>
        </Button>
      </SubContainer>
    </Container>
  )
}
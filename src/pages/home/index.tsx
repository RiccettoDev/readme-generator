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
import { ModalCreate } from "../../components/modalCreate";

export function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <Container>
      <audio
        src={backgroundMusic}
        autoPlay
        loop
        ref={audioRef}
        controls
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
            <Input
              placeholder="Digite o nome do projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputIcon>
              <Img src={iconDescription} alt="icon name" />
            </InputIcon>
            <Input
              placeholder="Digite a descrição do projeto"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </InputWrapper>
        </InputContainer>
        <Button onClick={openModal}>
          <h1>Create</h1>
        </Button>
      </SubContainer>
      {isModalVisible && (
        <ModalCreate
          isOpen={isModalVisible}
          onClose={closeModal}
          projectName={projectName}
          projectDescription={projectDescription}
        />
      )}
    </Container>
  )
}

import { useRef, useState } from "react";
import {
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

import backgroundMusic from '../../../public/background-music.mp3'

import logo from '../../assets/icon-readme.png'
import iconName from '../../assets/icon-user.png'
import iconDescription from '../../assets/icon-description.png'
import { ModalCreate } from "../../components/modalCreate";
import { Footer } from "../../components/footer";

export function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

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
        style={{ top: '0' }}
      />
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
              placeholder="Nome do projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputIcon>
              <Img src={iconDescription} alt="icon name" />
            </InputIcon>
            <Input
              placeholder="Descrição do projeto"
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
      <Footer />
    </Container>
  )
}

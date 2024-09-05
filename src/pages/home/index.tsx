import { Button, Container, Img, Input, InputContainer, InputIcon, InputWrapper, LogContainer, SubContainer } from "./home-styles";

import logo from '../../assets/icon-readme.png'
import iconName from '../../assets/icon-user.png'
import iconDescription from '../../assets/icon-description.png'

export function Home() {
  return (
    <Container>
      <h1>Bem vindo ao Gerador de Readme!</h1>
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
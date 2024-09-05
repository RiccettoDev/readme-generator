import React from "react";
import { Input, InputContainer, InputIcon, InputWrapper } from "./project-forms-styles";
import iconName from '../../assets/icon-user.png';
import iconDescription from '../../assets/icon-description.png';

interface ProjectFormProps {
  projectName: string;
  setProjectName: (value: string) => void;
  projectDescription: string;
  setProjectDescription: (value: string) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  projectName,
  setProjectName,
  projectDescription,
  setProjectDescription
}) => {
  return (
    <InputContainer>
      <InputWrapper>
        <InputIcon>
          <img src={iconName} alt="icon name" />
        </InputIcon>
        <Input
          placeholder="Digite o nome do projeto"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <InputIcon>
          <img src={iconDescription} alt="icon description" />
        </InputIcon>
        <Input
          placeholder="Digite a descrição do projeto"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default ProjectForm;

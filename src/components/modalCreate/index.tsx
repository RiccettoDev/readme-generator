import { useState } from "react";
import { CloseButton, Container, Input, SaveButton, Select, AddButton, ContainerMarkdown, CopyButton } from "./modal-create";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  projectDescription: string;
}

interface ModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  markdownContent: string;
}

const technologyMap: Record<string, { color: string, logo: string }> = {
  Java: { color: '007396', logo: 'java' },
  Spring: { color: '6DB33F', logo: 'spring' },
  Quarkus: { color: 'E5280A', logo: 'quarkus' },
  JavaScript: { color: 'F7DF1E', logo: 'javascript' },
  React: { color: '61DAFB', logo: 'react' },
  ReactNative: { color: '61DAFB', logo: 'react' }, // React Native uses the same logo as React
  Node: { color: '8CC84B', logo: 'node' },
  TailwindCSS: { color: '38B2AC', logo: 'tailwindcss' },
  CSS: { color: '2965F1', logo: 'css3' },
  HTML: { color: 'E34F26', logo: 'html5' },
  StyledComponents: { color: 'DB7093', logo: 'styled-components' },
  Python: { color: '3776AB', logo: 'python' },
  TypeScript: { color: '007ACC', logo: 'typescript' },
  Npm: { color: 'CB3837', logo: 'npm' },
  Yarn: { color: '2C8EBB', logo: 'yarn' },
  VSCode: { color: '007ACC', logo: 'visual-studio-code' },
  Vite: { color: '646CFF', logo: 'vite' },
  Git: { color: 'F05032', logo: 'git' },
  GitHub: { color: '181717', logo: 'github' },
  Vercel: { color: '000000', logo: 'vercel' },
  Postgres: { color: '336791', logo: 'postgresql' },
  SQL: { color: '003B57', logo: 'mysql' },
  Docker: { color: '2496ED', logo: 'docker' },
};

export function ModalCreate({ isOpen, onClose, projectName, projectDescription }: ModalProps) {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [secondaryTechnologies, setSecondaryTechnologies] = useState<string[]>([]);
  const [dependencies, setDependencies] = useState<string[]>([]);
  const [selectedTechnology, setSelectedTechnology] = useState<string>("");
  const [selectedSecondaryTechnology, setSelectedSecondaryTechnology] = useState<string>("");
  const [newDependency, setNewDependency] = useState<string>("");
  const [contactLink, setContactLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleAddTechnology = () => {
    if (selectedTechnology && !technologies.includes(selectedTechnology)) {
      setTechnologies([...technologies, selectedTechnology]);
      setSelectedTechnology(""); // Limpar seleção após adicionar
    }
  };

  const handleAddSecondaryTechnology = () => {
    if (selectedSecondaryTechnology && !secondaryTechnologies.includes(selectedSecondaryTechnology)) {
      setSecondaryTechnologies([...secondaryTechnologies, selectedSecondaryTechnology]);
      setSelectedSecondaryTechnology(""); // Limpar seleção após adicionar
    }
  };

  const handleAddDependency = () => {
    if (newDependency && !dependencies.includes(newDependency)) {
      setDependencies([...dependencies, newDependency]);
      setNewDependency(""); // Limpar input após adicionar
    }
  };

  const handleSave = () => {
    console.log("Project Link:", projectLink);
    const generatedMarkdown = `
Click here to change the language:

[![flag-eua](./src/img/doc/eua.png)](./README.md) [![flag-brasil](./src/img/doc/brasil.png)](./README-pt-br.md)

# ${projectName}

The **${projectName}** ${projectDescription}

:computer: [Click here to access the application](${projectLink})

![${projectName}](./src/img/doc/project.png)

## Technologies

${technologies
        .map(
          (tech) =>
            `![Static Badge](https://img.shields.io/badge/${encodeURIComponent(tech.trim())}-${technologyMap[tech]?.color || '000000'}?style=for-the-badge&logo=${encodeURIComponent(technologyMap[tech]?.logo || tech.trim().toLowerCase())}&logoColor=ffffff&labelColor=${technologyMap[tech]?.color || '000000'})`
        )
        .join("\n")}

## Secondary Technologies

${secondaryTechnologies
        .map(
          (tech) =>
            `![Static Badge](https://img.shields.io/badge/${encodeURIComponent(tech.trim())}-${technologyMap[tech]?.color || '000000'}?style=for-the-badge&logo=${encodeURIComponent(technologyMap[tech]?.logo || tech.trim().toLowerCase())}&logoColor=ffffff&labelColor=${technologyMap[tech]?.color || '000000'})`
        )
        .join("\n")}

## Dependencies

- ${dependencies.join('\n- ')}

## Getting Started

This project can be used on your own machine after performing a PUSH of this repository.

### \`npm install\`

To download and update all project libraries and dependencies

### \`npm start\`

Runs the application in development mode.
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser, or another port that the project is using.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Contact

<div>
  <a href="${contactLink}" target="_blank"><img src="https://img.shields.io/badge/portifolio-FF0000?style=for-the-badge&logo=unitednations&logoColor=white" target="_blank" alt="Portfolio"></a>
  <a href="https://instagram.com/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank" alt="Instagram"></a> 
  <a href="mailto:riccettodev@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt="Gmail"></a>
  <a href="https://www.linkedin.com/in/eduardo-peixoto-riccetto-094a53a2/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="LinkedIn"></a> 
</div>
    `;

    setMarkdownContent(generatedMarkdown);
    setIsPreviewOpen(true); // Abre o modal de visualização
  };

  const handleTechnologiesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTechnology(event.target.value);
  };

  const handleSecondaryTechnologiesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSecondaryTechnology(event.target.value);
  };

  const handleDependencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDependency(event.target.value);
  };

  if (!isOpen) return null;

  return (
    <>
      <Container>
        <CloseButton onClick={onClose}>X</CloseButton>
        <p><strong>Nome do projeto:</strong> {projectName}</p>
        <p><strong>Descrição do projeto:</strong> {projectDescription}</p>

        <Input
          placeholder="Link para o projeto"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <Select value={selectedTechnology} onChange={handleTechnologiesChange}>
          <option value="" disabled>Selecione uma tecnologia</option>
          {Object.keys(technologyMap).filter(tech => !['Npm', 'Yarn', 'VSCode', 'Vite', 'Git', 'GitHub', 'Vercel', 'Postgres', 'SQL', 'Docker'].includes(tech)).map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </Select>
        <AddButton onClick={handleAddTechnology}>Adicionar Tecnologia</AddButton>

        <Select value={selectedSecondaryTechnology} onChange={handleSecondaryTechnologiesChange}>
          <option value="" disabled>Selecione uma tecnologia secundária</option>
          {Object.keys(technologyMap).filter(tech => ['Npm', 'Yarn', 'VSCode', 'Vite', 'Git', 'GitHub', 'Vercel', 'Postgres', 'SQL', 'Docker'].includes(tech)).map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </Select>
        <AddButton onClick={handleAddSecondaryTechnology}>Adicionar Tecnologia Secundária</AddButton>

        <Input
          placeholder="Adicionar dependência"
          value={newDependency}
          onChange={handleDependencyChange}
        />
        <AddButton onClick={handleAddDependency}>Adicionar Dependência</AddButton>

        <Input
          placeholder="Link de contato"
          value={contactLink}
          onChange={(e) => setContactLink(e.target.value)}
        />

        <SaveButton onClick={handleSave}>Salvar e Visualizar</SaveButton>
      </Container>

      {isPreviewOpen && (
        <ModalPreview isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} markdownContent={markdownContent} />
      )}
    </>
  );
}

function ModalPreview({ isOpen, onClose, markdownContent }: ModalPreviewProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownContent)
      .then(() => {
        alert("Markdown copiado para a área de transferência!");
      })
      .catch(err => {
        console.error("Erro ao copiar para a área de transferência: ", err);
      });
  };

  if (!isOpen) return null;

  return (
    <ContainerMarkdown>
      <CloseButton onClick={onClose}>X</CloseButton>
      <div style={{ margin: "20px 0" }}>
        <h3>Visualização do Markdown</h3>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{markdownContent}</pre>
      </div>
      <CopyButton onClick={copyToClipboard}>Copiar</CopyButton>
    </ContainerMarkdown>
  );
}

import { ContainerFooter } from "./footer-styles";

export function Footer() {
  return (
    <ContainerFooter>
      <a
        href="https://portfolio-ten-lime-67.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        &copy; 2024 - Eduardo Riccetto
      </a>
    </ContainerFooter>
  );
}
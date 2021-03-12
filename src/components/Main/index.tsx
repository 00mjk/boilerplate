import * as Styled from './styles';

const Main = () => {
  return (
    <Styled.Wrapper>
      <Styled.Logo
        src="./img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <Styled.Title>React Avançado</Styled.Title>
      <Styled.Description>
        Typescript, React Next e Styled Components
      </Styled.Description>
      <Styled.Illustration src="./img/hero-illustration.svg"/>
    </Styled.Wrapper>
  );
};

export default Main;

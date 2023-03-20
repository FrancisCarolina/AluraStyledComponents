import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitchTema from "./Components/SwitchTema";

function App() {
  const [tema, setTema] = React.useState(true);
  const mudarTema = () => {
    setTema(!tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <BtnTema onClick={mudarTema}>
        <SwitchTema tema={tema} />
      </BtnTema>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;

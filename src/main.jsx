import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

//estilo global e temas de cor e fonte
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

//rotas de autorização
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById( "root" )).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />

      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </ThemeProvider>
  </React.StrictMode>
);
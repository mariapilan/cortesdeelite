import React from "react";
import { Text, View } from "react-native";
import LoginClienteScreen from "./src/login/LoginClienteScreen";
import LoginProfissionalScreen from "./src/login/LoginProfissionalScreen";
import LoginServicoScreen from "./src/login/LoginServicoScreen";
import CadastroClienteScreen from "./src/cadastro/CadastroClientesScreen";
import CadastroProfissionalScreen from "./src/cadastro/CadastroProfissionalScreen";
import CadastroServicoScreen from "./src/cadastro/CadastroServicoScreen";


function App(): JSX.Element {
  
  return (
    
      <CadastroServicoScreen></CadastroServicoScreen>
    );
}

export default App;
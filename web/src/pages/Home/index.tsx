import React from "react";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import logo from "../../assets/logo.svg";

const Home = () =>{
  return(
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="SGSP logo."/>
        </header>

        <main>
          <h1>Seu website hospitalar.</h1>
          <p>Ajudamos funcionários/servidores a gerenciarem atividades recorrent
            es em hospitais.</p>
          <a href="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um médico</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

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
          <Link to="/create-medico">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um médico</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
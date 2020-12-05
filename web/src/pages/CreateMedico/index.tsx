import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";

const CreateMedico = () =>{
  return(

    <div id="page-create-medico">

      <header>

        <img src={logo} alt="SGSP logo"/>

        <Link to="/">
          <FiArrowLeft />
          voltar para Home
        </Link>

      </header>

      <form>

        <h1>Cadastro <br/> do Médico</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome do médico</label>
            <input 
              type="text"
              name="name"
              id="name"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Especialidades</h2>
          </legend>
        </fieldset>

      </form>

    </div>
  );
}

export default CreateMedico;
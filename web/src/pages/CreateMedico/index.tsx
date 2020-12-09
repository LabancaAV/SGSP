import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";
import { useState } from "react";

interface Especialidade{
  cod_especialidade:number,
  nome_especialidade: string,
  image_url: string
}

const CreateMedico = () =>{
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]); 

  useEffect(() => {
    api.get("especialidade").then(response => {
      setEspecialidades(response.data);
    });
  }, [] )

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
            <label htmlFor="nome_med">Nome do médico</label>
            <input 
              type="text"
              name="nome_med"
              id="nome_med"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="rg_med">RG do médico</label>
              <input 
                type="text"
                name="rg_med"
                id="rg_med"
              />
            </div>
            <div className="field">
              <label htmlFor="cpf_med">CPF do médico</label>
              <input 
                type="text"
                name="cpf_med"
                id="cpf_med"
              />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
                <label htmlFor="orgao_expedidor">Orgão expedidor</label>
                <input 
                  type="text"
                  name="orgao_expedidor"
                  id="orgao_expedidor"
                />
            </div>
            <div className="field">
                <label htmlFor="sexo_med">Sexo</label>
                <input 
                  type="text"
                  name="sexo_med"
                  id="sexo_med"
                />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="data_nasc">Data nascimento</label>
              <input 
                type="date"
                name="data_nasc"
                id="data_nasc"
              />
            </div>
            <div className="field">
              <label htmlFor="data_adm">Data admissão</label>
              <input 
                type="date"
                name="data_adm"
                id="data_adm"
              />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
                <label htmlFor="celular_med">Celular</label>
                <input 
                  type="text"
                  name="celular_med"
                  id="celular_med"
                />
            </div>
            <div className="field">
                <label htmlFor="crm_med">CRM</label>
                <input 
                  type="text"
                  name="crm_med"
                  id="crm_med"
                />
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf_med">Estado (UF)</label>
              <select name="uf_med" id="uf_med">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="cid_med">Cidade</label>
              <select name="cid_med" id="cid_med">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>

          <div className="field-group">
            <div className="field">
                  <label htmlFor="endereco_med">Endereço</label>
                  <input 
                    type="text"
                    name="endereco_med"
                    id="endereco_med"
                  />
            </div>
            <div className="field">
                  <label htmlFor="bairro_med">Bairro</label>
                  <input 
                    type="text"
                    name="bairro_med"
                    id="bairro_med"
                  />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
                    <label htmlFor="n_med">Número</label>
                    <input 
                      type="text"
                      name="n_med"
                      id="n_med"
                    />
            </div>
            <div className="field">
                  <label htmlFor="cep_med">CEP</label>
                  <input 
                    type="text"
                    name="cep_med"
                    id="cep_med"
                  />
            </div>
          </div>
          
          <div className="field">
                    <label htmlFor="comp_med">Complemento</label>
                    <input 
                      type="text"
                      name="comp_med"
                      id="comp_med"
                    />
          </div>
          
        </fieldset>

        <fieldset>
          <legend>
            <h2>Especialidades</h2>
            <span>Selecione as especialidades do médico</span>
          </legend>
          <ul className="items-grid">
            {especialidades.map(especialidade => (
            <li key={especialidade.cod_especialidade}>
              <img src={especialidade.image_url} alt={especialidade.nome_especialidade}/>
            <span>{especialidade.nome_especialidade}</span>
            </li>
            ))}
          </ul>
        </fieldset>

      <button type="submit">
        Cadastrar médico
      </button>
      </form>

    </div>
  );
}

export default CreateMedico;
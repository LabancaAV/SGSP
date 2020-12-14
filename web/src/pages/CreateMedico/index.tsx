import React, { useEffect, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";
import { useState } from "react";

interface Especialidade{
  cod_especialidade:number,
  nome_especialidade: string,
  image_url: string
}

interface IBGEUFResponse{
  sigla: string;
}

interface IBGECityResponse{
  nome: string;
}


const CreateMedico = () =>{
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]); 

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [selectedEspecialidades, setSelectedEspecialidades] = useState<number[]>([])

  const [formData, setFormData] = useState({
    nome_med: "",
    rg_med: "",
    cpf_med: "",
    orgao_expedidor: "",
    data_nasc: "",
    data_adm: "",
    sexo_med: "",
    endereco_med: "",
    bairro_med: "",
    n_med: "",
    comp_med: "",
    cep_med: "",
    celular_med: "",
    crm_med: "",
  })

  useEffect(() => {
    api.get("especialidade").then(response => {
      setEspecialidades(response.data);
    });
  }, [] );

  useEffect(() => {
    axios.get<IBGEUFResponse[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials);
    });
  }, [] );

  useEffect(() => {
    if(selectedUf === '0'){
      return;
    }

    axios
    .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(response => {
      const cityNames = response.data.map(city => city.nome);

      setCities(cityNames);
    });
  }, [selectedUf] );

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
    const city = event.target.value;
    setSelectedCity(city);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleSelectEspecialidade(cod_especialidade: number){
    const alreadySelected = selectedEspecialidades.findIndex(especialidade => especialidade === cod_especialidade)
    if(alreadySelected >= 0){
      const filteredEspecialidades = selectedEspecialidades.filter(especialidade => especialidade !== cod_especialidade)
      setSelectedEspecialidades(filteredEspecialidades);
    }else{
      setSelectedEspecialidades([ ...selectedEspecialidades, cod_especialidade ]);
    }
    
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const {
        nome_med,
        rg_med,
        cpf_med,
        orgao_expedidor,
        data_nasc,
        data_adm,
        sexo_med,
        endereco_med,
        bairro_med,
        n_med,
        comp_med,
        cep_med,
        celular_med,
        crm_med,
    } = formData;

    const uf_med = selectedUf;
    const cid_med = selectedCity;
    const especialidade = selectedEspecialidades

    const data = {
        nome_med,
        rg_med,
        cpf_med,
        orgao_expedidor,
        data_nasc,
        data_adm,
        sexo_med,
        endereco_med,
        bairro_med,
        n_med,
        comp_med,
        cep_med,
        celular_med,
        crm_med,
        cid_med,
        uf_med,
        especialidade
    }
    console.log(data);

    await api.post("medico", data)

    alert("Médico cadastrado no sistema do hospital SGSP!")
  }

  return(

    <div id="page-create-medico">

      <header>

        <img src={logo} alt="SGSP logo"/>

        <Link to="/">
          <FiArrowLeft />
          voltar para Home
        </Link>

      </header>

      <form onSubmit={handleSubmit}>

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
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="rg_med">RG do médico</label>
              <input 
                type="text"
                name="rg_med"
                id="rg_med"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="cpf_med">CPF do médico</label>
              <input 
                type="text"
                name="cpf_med"
                id="cpf_med"
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
            </div>
            <div className="field">
                <label htmlFor="sexo_med">Sexo</label>
                <input 
                  type="text"
                  name="sexo_med"
                  id="sexo_med"
                  onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="data_adm">Data admissão</label>
              <input 
                type="date"
                name="data_adm"
                id="data_adm"
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
            </div>
            <div className="field">
                <label htmlFor="crm_med">CRM</label>
                <input 
                  type="text"
                  name="crm_med"
                  id="crm_med"
                  onChange={handleInputChange}
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
              <select 
                name="uf_med" 
                id="uf_med" 
                value={selectedUf} 
                onChange={handleSelectUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="cid_med">Cidade</label>
              <select 
                name="cid_med" 
                id="cid_med" 
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
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
                    onChange={handleInputChange}
                  />
            </div>
            <div className="field">
                  <label htmlFor="bairro_med">Bairro</label>
                  <input 
                    type="text"
                    name="bairro_med"
                    id="bairro_med"
                    onChange={handleInputChange}
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
                      onChange={handleInputChange}
                    />
            </div>
            <div className="field">
                  <label htmlFor="cep_med">CEP</label>
                  <input 
                    type="text"
                    name="cep_med"
                    id="cep_med"
                    onChange={handleInputChange}
                  />
            </div>
          </div>
          
          <div className="field">
                    <label htmlFor="comp_med">Complemento</label>
                    <input 
                      type="text"
                      name="comp_med"
                      id="comp_med"
                      onChange={handleInputChange}
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
            <li 
              key={especialidade.cod_especialidade}
              onClick={() => handleSelectEspecialidade(especialidade.cod_especialidade)}
              className={selectedEspecialidades.includes(especialidade.cod_especialidade) ? 'selected' : ''}
            >
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
import { json, Request, Response } from "express";
import knex from "../database/connection";

class PacientesController{
  async create(request: Request, response: Response){
    const {    
        nome_pac,
        rg_pac,
        cpf_pac,
        orgao_expedidor_pac,
        raca_pac,
        certidao_pac,
        situacao_familiar_pac,
        escolaridade_pac,
        frequenta_escola,
        sexo_pac,
        tipo_sangue_pac,
        naturalidade_pac,
        nacionalidade_pac,
        mae_pac,
        pai_pac,
        responsavel_pac,
        endereco_pac,
        bairro_pac,
        n_pac,
        comp_pac,
        cep_pac,
        data_nasc_pac,
        celular_pac,
        telefone_pac,
        cid_pac,
        uf_pac
    } = request.body;

    await knex("pacientes").insert({
        nome_pac,
        rg_pac,
        cpf_pac,
        orgao_expedidor_pac,
        raca_pac,
        certidao_pac,
        situacao_familiar_pac,
        escolaridade_pac,
        frequenta_escola,
        sexo_pac,
        tipo_sangue_pac,
        naturalidade_pac,
        nacionalidade_pac,
        mae_pac,
        pai_pac,
        responsavel_pac,
        endereco_pac,
        bairro_pac,
        n_pac,
        comp_pac,
        cep_pac,
        data_nasc_pac,
        celular_pac,
        telefone_pac,
        cid_pac,
        uf_pac
    })

    return response.json({ success: true }); 

  }
}

export default PacientesController;
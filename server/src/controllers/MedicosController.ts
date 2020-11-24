import { json, Request, Response } from "express";
import knex from "../database/connection";

class MedicosController{
  async index(request: Request, response: Response){
    const { cid_med, uf_med, especialidades } = request.query;

    const parsedEspecidalidades = String(especialidades)
    .split(",")
    .map(especialidade => Number(especialidade.trim()));

    const medicos = await knex("medico")
    .join("med_esp", "medico.cod_medico", "=", "med_esp.med_id")
    .whereIn("med_esp.esp_id", parsedEspecidalidades)
    .where("cid_med", String(cid_med))
    .where("uf_med", String(uf_med))
    .distinct()
    .select("medico.*");

    return response.json(medicos);
  }

  //async todos(request: Request, response: Response) {
  //  const allmedicos = await knex("medico").select("*");
  //
  //  return response.json(allmedicos); 
  //}

  async show(request: Request, response: Response){
    const { id } = request.params; 

    const medico = await knex("medico").where("cod_medico", id).first();

    if(!medico){
      return response.status(400).json({ message: "Doctor not found" });
    }

    const especialidades = await knex("especialidade")
      .join("med_esp", "especialidade.cod_especialidade", "=", "med_esp.esp_id")
      .where("med_esp.med_id", id)
      .select("especialidade.nome_especialidade");

    return response.json({ medico, especialidades });
  }

  async create(request: Request, response: Response) {
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
      cid_med,
      uf_med,
      especialidade
    } = request.body;
  
    const trx = await knex.transaction();
  
    const medico = {
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
      uf_med
    }

    const insertedIds = await trx("medico").insert(medico);
  
    const med_id = insertedIds[0];
  
    const medEsp = especialidade.map((esp_id: number) => {
      return{
        esp_id,
        med_id
      }
    })
  
    await trx("med_esp").insert(medEsp);
  
    await trx.commit();

    return response.json({ 
      id: med_id,
      ...medico
     });
  }
}

export default MedicosController;
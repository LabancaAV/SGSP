import { Request, Response } from "express";
import knex from "../database/connection";

class EspecialidadesController{
  async index(request: Request, response: Response) {
    const especs = await knex("especialidade").select("*");
  
    const serializedEspecialidade = especs.map(espec => {
      return {
        cod_especialidade: espec.cod_especialidade,
        nome_especialidade: espec.nome_especialidade,
        image_url: `http://localhost:3333/uploads/${espec.image}`
      }
    })
  
    return response.json(serializedEspecialidade); 
  }
}

export default EspecialidadesController;
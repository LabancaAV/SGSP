import express from "express";

const routes = express.Router();
import knex from "./database/connection";

routes.get("/especialidade", async (request, response) => {
  const especs = await knex("especialidade").select("*");

  const serializedEspecialidade = especs.map(espec => {
    return {
      nome_especialidade: espec.nome_especialidade,
      image_url: `http://localhost:3333/uploads/${espec.image}`
    }
  })

  return response.json(serializedEspecialidade); 
});

export default routes;
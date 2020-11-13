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

routes.post("/medico", async (request, response) => {
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

  knex("medico").insert({

  })
})

export default routes;
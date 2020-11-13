import express from "express";

const routes = express.Router();
import knex from "./database/connection";

routes.get("/especialidade", async (request, response) => {
  const especs = await knex("especialidade").select("*");

  const serializedEspecialidade = especs.map(espec => {
    return {
      cod_especialidade: espec.cod_especialidade,
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

  const trx = await knex.transaction();

  const insertedIds = await trx("medico").insert({
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
  });

  const med_id = insertedIds[0];

  const medEsp = especialidade.map((esp_id: number) => {
    return{
      esp_id,
      med_id
    }
  })

  await trx("med_esp").insert(medEsp);

  return response.json({ success: true });
});

export default routes;
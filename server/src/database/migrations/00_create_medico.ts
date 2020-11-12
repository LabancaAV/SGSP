import Knex from "knex";

export async function up(knex: Knex){
  return knex.schema.createTable("medico", table =>{
    table.increments("cod_medico").primary();
    table.string("nome_med").notNullable();
    table.string("rg_med", 20);
    table.string("cpf_med",14).notNullable();
    table.string("orgao_expedidor",60);
    table.date("data_nasc").notNullable();
    table.date("data_adm");
    table.string("sexo_med",1).notNullable();
    table.string("endereco_med",45).notNullable();
    table.string("bairro_med",45).notNullable();
    table.integer("n_med");
    table.string("comp_med",45);
    table.string("cep_med",10);
    table.string("celular_med",20).notNullable();
    table.string("crm_med",10).notNullable();
    table.integer("cid_id")
      .notNullable()
      .references("cod_cidade")
      .inTable("cidade");
  })
}

export async function down(knex: Knex){
    return knex.schema.dropTable("medico");
}
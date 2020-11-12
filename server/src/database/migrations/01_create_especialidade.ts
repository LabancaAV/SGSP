import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("especialidade", table =>{
    table.increments("cod_especialidade").primary();
    table.string("nome_especialidade").notNullable();
    table.string("image").notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("especialidade");
}
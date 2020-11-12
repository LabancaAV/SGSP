import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("med_esp", table =>{
    table.increments("cod_med_esp").primary();

    table.integer("med_id")
      .notNullable()
      .references("cod_medico")
      .inTable("medico");

    table.integer("esp_id")
      .notNullable()
      .references("cod_especialidade")
      .inTable("especialidade");
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("med_esp");
}
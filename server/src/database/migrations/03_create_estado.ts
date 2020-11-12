import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("estado", table => {
        table.increments("cod_estado").primary();
        table.string("nome_estado", 40).notNullable();
        table.string("sigla_estado", 2).notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("estado")
}
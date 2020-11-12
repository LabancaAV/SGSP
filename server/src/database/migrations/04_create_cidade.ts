import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("cidade", table => {
        table.increments("cod_cidade").primary();
        table.string("nome_cidade", 80).notNullable();
        table.integer("estado_id")
          .notNullable()
          .references("cod_estado")
          .inTable("estado");
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("cidade")
}
import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("marcar_consulta", table => {
        table.increments("cod_consulta").primary();
        table.date("data").notNullable();
        table.time("hora");
        table.decimal("valor_consulta", 6, 2);
        table.decimal("desconto", 6, 2);
        table.decimal("valor_final", 6, 2);
        table.string("cartao_sus", 3);
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
    return knex.schema.dropTable("marcar_consulta")
}
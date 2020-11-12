import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("usuario", table => {
        table.increments("cod_usu").primary();
        table.string("nome_usu", 60).notNullable();
        table.string("login_usu", 30).notNullable();
        table.string("senha_usu", 10).notNullable();
        table.string("confrima_senha", 10).notNullable();
        table.string("email_usu", 80);
        table.string("perfil_usu", 45).notNullable();
        table.string("situacao_usu", 10);
        table.date("data_cad_usu").notNullable();

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("usuario")
}
import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("pacientes", table => {
        table.increments("cod_pac").primary();
        table.string("nome_pac").notNullable();
        table.string("rg_pac", 20);
        table.string("cpf_pac", 14).notNullable;
        table.string("orgao_expedidor_pac", 60);
        table.string("raca_pac", 20);
        table.string("certidao_pac", 40);
        table.string("situacao_familiar_pac", 50);
        table.string("escolaridade_pac", 40);
        table.string("frequenta_escola", 3);
        table.string("sexo_pac", 1).notNullable;
        table.string("tipo_sangue_pac", 5).notNullable;
        table.string("naturalidade_pac", 60);
        table.string("nacionalidade_pac", 30);
        table.string("mae_pac", 60).notNullable;
        table.string("pai_pac", 60);
        table.string("responsavel_pac", 60);
        table.string("endereco_pac", 45).notNullable;
        table.string("bairro_pac", 45).notNullable;
        table.integer("n_pac");
        table.string("comp_pac", 45);
        table.string("cep_pac", 10);
        table.date("data_nasc_pac").notNullable;
        table.string("celular_pac", 20).notNullable;
        table.string("telefone_pac", 20);
        table.integer("cid_id")
          .notNullable()
          .references("cod_cidade")
          .inTable("cidade");

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("pacientes")
}
import Knex from "knex";

export async function seed(knex: Knex){
  await knex('especialidade').insert([
    { nome_especialidade: 'DERMATOLOGIA', image: 'dermatologia.svg' },
    { nome_especialidade: 'ORTOPEDIA', image: 'ortopedia.svg' },
    { nome_especialidade: 'PSIQUIATRIA', image: 'psiquiatria.svg' },
    { nome_especialidade: 'PEDIATRIA', image: 'pediatria.svg' },
    { nome_especialidade: 'NEUROLOGIA', image: 'neurologia.svg' },
    { nome_especialidade: 'CARDIOLOGIA', image: 'cardiologia.svg' },
    { nome_especialidade: 'GERIATRIA', image: 'geriatria.svg' },
    { nome_especialidade: 'OFTALMOLOGIA', image: 'oftalmologia.svg' },
    { nome_especialidade: 'CLÍNICO GERAL', image: 'clinico_geral.svg' },
  ])
}
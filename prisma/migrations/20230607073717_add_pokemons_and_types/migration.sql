-- CreateEnum
CREATE TYPE "PokemonTypes" AS ENUM ('planta', 'fogo', 'agua', 'inseto', 'voador', 'venenoso', 'terrestre', 'pedra', 'normal', 'lutador', 'fantasma', 'aco', 'eletrico', 'psiquico', 'gelo', 'dragao', 'fada', 'sombrio', 'desconhecido');

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "pokemonType" "PokemonTypes"[],

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

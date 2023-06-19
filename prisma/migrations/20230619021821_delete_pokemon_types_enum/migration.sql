/*
  Warnings:

  - You are about to drop the column `pokemonType` on the `Pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "pokemonType";

-- DropEnum
DROP TYPE "PokemonTypes";

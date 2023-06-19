-- CreateTable
CREATE TABLE "PokemonTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "PokemonTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToPokemonTypes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToPokemonTypes_AB_unique" ON "_PokemonToPokemonTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToPokemonTypes_B_index" ON "_PokemonToPokemonTypes"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToPokemonTypes" ADD CONSTRAINT "_PokemonToPokemonTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToPokemonTypes" ADD CONSTRAINT "_PokemonToPokemonTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "PokemonTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

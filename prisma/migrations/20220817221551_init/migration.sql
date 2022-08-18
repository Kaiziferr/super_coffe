/*
  Warnings:

  - You are about to drop the column `type` on the `RolUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rol]` on the table `RolUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rol` to the `RolUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RolUser" DROP COLUMN "type",
ADD COLUMN     "rol" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RolUser_rol_key" ON "RolUser"("rol");

/*
  Warnings:

  - You are about to drop the column `required` on the `RolUser` table. All the data in the column will be lost.
  - Added the required column `type` to the `RolUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RolUser" DROP COLUMN "required",
ADD COLUMN     "type" TEXT NOT NULL;

/*
  Warnings:

  - Added the required column `flightType` to the `Flights` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flights" ADD COLUMN     "flightType" TEXT NOT NULL;

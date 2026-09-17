/*
  Warnings:

  - You are about to drop the column `userId` on the `Wallpaper` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Wallpaper" DROP CONSTRAINT "Wallpaper_userId_fkey";

-- AlterTable
ALTER TABLE "Wallpaper" DROP COLUMN "userId";

/*
  Warnings:

  - You are about to drop the `LeaderBoard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Wallpaper` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LeaderBoard" DROP CONSTRAINT "LeaderBoard_wallpaperId_fkey";

-- AlterTable
ALTER TABLE "Wallpaper" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "LeaderBoard";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wallpaper" ADD CONSTRAINT "Wallpaper_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

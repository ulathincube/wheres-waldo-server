-- CreateTable
CREATE TABLE "LeaderBoard" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wallpaperId" TEXT NOT NULL,

    CONSTRAINT "LeaderBoard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeaderBoard_wallpaperId_key" ON "LeaderBoard"("wallpaperId");

-- AddForeignKey
ALTER TABLE "LeaderBoard" ADD CONSTRAINT "LeaderBoard_wallpaperId_fkey" FOREIGN KEY ("wallpaperId") REFERENCES "Wallpaper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

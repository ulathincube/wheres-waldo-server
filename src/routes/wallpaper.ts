import { Router } from "express"
import {
  findSpecificCharacter,
  getWallpaperController,
  completeGame,
} from "../controllers/wallpaper.js"
import { startTimer } from "../middlewares/startTimer.js"

const router = Router()

router.get("/", startTimer, getWallpaperController)

router.post("/:wallpaperId/complete", completeGame)

router.post("/:wallpaperId/:characterId", findSpecificCharacter)

export default router

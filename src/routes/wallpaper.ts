import { Router } from "express"
import {
  findSpecificCharacter,
  getWallpaperController,
  completeGame,
} from "../controllers/wallpaper.js"

const router = Router()

router.get("/", getWallpaperController)

router.post("/:wallpaperId/complete", completeGame)

router.post("/:wallpaperId/:characterId", findSpecificCharacter)

export default router

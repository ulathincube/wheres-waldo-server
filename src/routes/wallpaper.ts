import { Router } from "express"
import {
  findSpecificCharacter,
  getWallpaperController,
} from "../controllers/wallpaper.js"
const router = Router()

router.get("/", getWallpaperController)
router.post("/:wallpaperId/:characterId", findSpecificCharacter)

export default router

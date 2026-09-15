import { Router } from "express"
import {
  findSpecificCharacter,
  getWallpaper,
} from "../controllers/wallpaper.js"
const router = Router()

router.get("/", getWallpaper)
router.post("/:wallpaperId/:characterId", findSpecificCharacter)

export default router

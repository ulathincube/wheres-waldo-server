import { Router } from "express"
import {
  findSpecificCharacter,
  getWallpaperController,
} from "../controllers/wallpaper.js"
import { param, body } from "express-validator"

const router = Router()

router.get("/", getWallpaperController)
router.post(
  "/:wallpaperId/:characterId",
  body("position").notEmpty(),
  param("wallpaperId").trim().notEmpty(),
  param("characterId").trim().notEmpty(),
  findSpecificCharacter
)

export default router

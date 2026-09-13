import { Router } from "express"
import { findSpecificCharacter } from "../controllers/wallpaper.js"
const router = Router()

router.post("/:wallpaperId/:characterId", findSpecificCharacter)

export default router

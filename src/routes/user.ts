import { Router } from "express"
import { saveUserController, getUsersController } from "../controllers/user.js"

const router = Router()

router.post("/", saveUserController)
router.get("/", getUsersController)

export default router

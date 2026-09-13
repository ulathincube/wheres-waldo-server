import { Router } from "express"
import { checkServerHealth } from "../controllers/index.js"

const router = Router()

router.get("/health", checkServerHealth)

export default router

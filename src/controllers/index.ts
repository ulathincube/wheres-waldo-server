import type { Request, Response, NextFunction } from "express"
import { startTimer } from "../utils/timer.js"

export function checkServerHealth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  startTimer()
  res
    .status(200)
    .json({ message: "Server Health is 100!", data: { health: 100 } })
}

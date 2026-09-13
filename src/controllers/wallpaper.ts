import type { Request, Response, NextFunction } from "express"
import { stopTimer } from "../utils/timer.js"

export function findSpecificCharacter(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // query? param ? body?
  // waldo => x500 y378
  const positionWaldo = { x: 500, y: 378 }
  const { wallpaperId, characterId } = req.params
  const { position } = req.body
  // console.log({ position, wallpaperId, characterId })
  if (position.x === positionWaldo.x && position.y === positionWaldo.y) {
    stopTimer()
    res.status(200).json({ message: "Waldo found!", data: "" })
  } else {
    res.status(200).json({ message: "Keep looking!", data: "" })
  }
}

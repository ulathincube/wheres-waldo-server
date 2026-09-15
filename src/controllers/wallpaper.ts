import type { Request, Response } from "express"
import { stopTimer, startTimer, counter } from "../utils/timer.js"
import { createNumberRange, checkIfInRange } from "../checkRange.js"

export function getWallpaper(req: Request, res: Response) {
  startTimer()
  console.log({ counterWallpaper: counter })
  res.status(200).json({ data: "", message: "Getting Wallpaper!" })
}

export function findSpecificCharacter(req: Request, res: Response) {
  // query? param ? body?
  // waldo => x500 y378
  // position / width => position / height

  const positions = {
    yellow: {
      x: 0.5,
      y: 0.5,
    },
    blue: {
      x: 0.88,
      y: 0.86,
    },
    red: {
      x: 0.61,
      y: 0.66,
    },
  }

  const imageWidth = 1920
  const imageHeight = 1080
  const positionWaldo = { x: 0.5, y: 0.5 }
  const { wallpaperId, characterId } = req.params
  const { position } = req.body

  console.log({ characterId, wallpaperId, position, counter })
  // -25 <= x & y >= 25

  const xRange = createNumberRange(position.x, imageWidth)
  const yRange = createNumberRange(position.y, imageHeight)

  console.log({ xRange, yRange })

  if (
    checkIfInRange(xRange, positionWaldo.x) &&
    checkIfInRange(yRange, positionWaldo.y)
  ) {
    stopTimer()
    res.status(200).json({ message: "Waldo found!", data: true, counter })
  } else {
    res.status(200).json({ message: "Keep looking!", data: false, counter })
  }
}

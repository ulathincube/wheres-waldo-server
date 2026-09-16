import type { Request, Response, NextFunction } from "express"
import { stopTimer, startTimer, counter } from "../utils/timer.js"
import {
  createNumberRangeX,
  createNumberRangeY,
  checkIfInRange,
} from "../utils/checkRange.js"
import {
  getWallpaper,
  findCharacter,
  findWallpaper,
} from "../models/wallpaper.js"
import {
  WallpaperParams,
  WallpaperBody,
  WallpaperIdParam,
} from "../utils/validation.js"

export async function getWallpaperController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const wallpaper = await getWallpaper()
    startTimer()

    res.status(200).json({
      data: wallpaper,
      message: "Getting Wallpaper!",
      error: null,
      counter,
    })
  } catch (error: unknown) {
    next(error)
  }
}

export async function findSpecificCharacter(
  req: Request,
  res: Response
  // next: NextFunction
) {
  // query? param ? body?
  // waldo => x500 y378
  // position / width => position / heig

  const { wallpaperId, characterId } = WallpaperParams.parse(req.params)
  const { position } = WallpaperBody.parse(req.body)

  const wallpaper = await findWallpaper(wallpaperId)
  const character = await findCharacter(characterId)

  if (!wallpaper || !character)
    throw new Error("Unable to locate resources: wallpaper and character!")

  const xRange = createNumberRangeX(position.x)
  const yRange = createNumberRangeY(position.y)

  console.log({ xRange, yRange, x: position.x, y: position.y })

  if (
    checkIfInRange(xRange, character.position_x) &&
    checkIfInRange(yRange, character.position_y)
  ) {
    res
      .status(200)
      .json({ message: "Waldo found!", data: true, counter, error: null })
  } else {
    res
      .status(200)
      .json({ message: "Keep looking!", data: false, counter, error: null })
  }
}

export async function completeGame(
  req: Request,
  res: Response
  // next: NextFunction
) {
  const { wallpaperId } = WallpaperIdParam.parse(req.params)
  const wallpaper = await findWallpaper(wallpaperId)
  if (!wallpaper)
    return res.status(404).json({
      message: "Unable to locate this file",
      data: wallpaperId,
      error: null,
    })
  else {
    res
      .status(200)
      .json({ data: "", message: "Game complete", error: null, counter })
    stopTimer()
  }
}

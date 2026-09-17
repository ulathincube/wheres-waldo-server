import type { Request, Response, NextFunction } from "express"
import * as z from "zod"

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
  CompletionTimeBody,
} from "../utils/validation.js"

export async function getWallpaperController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const wallpaper = await getWallpaper()

    console.log({ time: req.session.time, wallpaper })

    res.status(200).json({
      data: wallpaper,
      message: "Getting Wallpaper!",
      error: null,
      counter: req.session.time,
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
  const { wallpaperId, characterId } = WallpaperParams.parse(req.params)
  const { position } = WallpaperBody.parse(req.body)

  console.log({ time: req.session.time })
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
      .json({ message: "Waldo found!", data: true, counter: 0, error: null })
  } else {
    res
      .status(200)
      .json({ message: "Keep looking!", data: false, counter: 0, error: null })
  }
}

export async function completeGame(
  req: Request,
  res: Response
  // next: NextFunction
) {
  try {
    console.log({ status: "game complete!" })
    const { wallpaperId } = WallpaperIdParam.parse(req.params)
    const { completionTime } = CompletionTimeBody.parse(req.body)
    const wallpaper = await findWallpaper(wallpaperId)
    if (!wallpaper || !completionTime)
      return res.status(404).json({
        message: "Unable to locate this file",
        data: wallpaperId,
        error: null,
      })
    else {
      //
      res.status(200).json({
        data: "",
        message: "Game complete",
        error: null,
        counter: completionTime,
      })
    }
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.log({ error: error.issues })
    } else {
      console.log({ error: error })
    }
  }
}

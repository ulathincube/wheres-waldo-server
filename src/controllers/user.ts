import type { Request, Response, NextFunction } from "express"
import { saveUser, getUsers } from "../models/user.js"
import { SaveUser } from "../utils/validation.js"
import * as z from "zod"

export async function saveUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log({ status: "saving user", body: req.body })
    const { username } = SaveUser.parse(req.body)

    const currentTime = Date.now()
    const timeElapsedInMs = currentTime - req.session.time

    const timeElapsedInSeconds = Math.round(timeElapsedInMs / 1000)
    const response = await saveUser(username, timeElapsedInSeconds)
    res.status(201).json({ message: "User saved", error: null, data: response })
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.log({ error: error.issues })
    } else {
      next(error)
    }
  }
}

export async function getUsersController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await getUsers()
    if (users) {
      res
        .status(200)
        .json({ data: users, error: null, message: "Getting users list" })
    }
    return res
      .status(404)
      .json({ error: null, data: null, message: "No users as of yet!" })
  } catch (error: unknown) {
    if (error instanceof Error) next(error)
  }
}

import type { Request, Response, NextFunction } from "express"
import { CustomError } from "./custom-error.js"

function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.status && error.message)
    return res.status(error.status).json({ error })
  throw new CustomError("Server error: Something went wrong", 500)
}

export default errorHandler

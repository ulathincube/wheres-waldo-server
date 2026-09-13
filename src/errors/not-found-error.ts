import type { Request, Response, NextFunction } from "express"
import { NotFoundError } from "./custom-error.js"

function notFoundError(req: Request, res: Response, next: NextFunction) {
  throw new NotFoundError("This resource does not currently exist")
}

export default notFoundError

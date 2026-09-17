import type { Response, Request, NextFunction } from "express"

export function startTimer(req: Request, res: Response, next: NextFunction) {
  const now = Date.now()
  req.session.time = now
  next()
}

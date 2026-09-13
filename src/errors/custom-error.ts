export class CustomError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message, 404)
  }
}

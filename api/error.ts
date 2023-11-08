// TODO : I should eliminate CustomError and use HTTPException instead
export class CustomError extends Error {
  public statusCode: number

  constructor(message: string, statusCode: number) {
    super(message) // Pass message to the parent constructor (Error)

    this.statusCode = statusCode
    this.name = this.constructor.name

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

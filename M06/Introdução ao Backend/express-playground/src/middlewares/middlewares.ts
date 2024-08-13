import type { NextFunction, Request, Response } from "express";
import { database } from "../database/db";
import { AppError } from "../errors/errors";

export class Middlewares {
  static isIdValid(req: Request, res: Response, next: NextFunction) {
    if (!database.some(product => product.id === Number(req.body.id))) {
      throw new AppError(404, "Product not found")
    }
    next()
  }

  static handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.message
      })
    } else {
      return res.status(500).json({
        error: "Internal Server Error"
      })
    }
  }
}
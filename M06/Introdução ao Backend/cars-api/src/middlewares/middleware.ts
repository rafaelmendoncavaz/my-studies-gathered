import type { NextFunction, Request, Response } from "express";
import { appError } from "../errors/error";
import { carsDB } from "../data/cars";

export class middlewares {
  static handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof appError) {
      return res.status(err.statusCode).json({
        error: err.message
      })
    } else {
      return res.status(500).json({
        error: "Internal Server Error"
      })
    }
  }

  static validateRequest(req: Request, res: Response, next: NextFunction) {
    if (!carsDB.some(car => car.id === Number(req.params.id))) {
      throw new appError(404, "This car does not exist")
    }
    next()
  }
}
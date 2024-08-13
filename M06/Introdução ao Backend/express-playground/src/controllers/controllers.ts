import type { Request, Response } from "express";
import { Services } from "../services/services";

export class Controllers {

  createProduct(req: Request, res: Response) {
    const service = Services.createProduct(req.body.name, req.body.price)

    return res.status(201).json(service)
  }

  getProducts(_: Request, res: Response) {
    const service = Services.getProducts

    return res.status(200).json(service)
  }

  getOneProduct(req: Request, res: Response) {
    const service = Services.getOneProduct(req.params.id)

    return res.status(200).json(service)
  }

  deleteProduct(req: Request, res: Response) {
    Services.deleteProduct(req.params.id)

    return res.status(204).json()
  }
}
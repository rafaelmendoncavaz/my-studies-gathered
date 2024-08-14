import type { Request, Response } from "express";
import { Services } from "../services/services";

const service = new Services()

export class Controller {
  create(req: Request, res: Response): Response {
    const response = service.create(req.body)

    return res.status(201).json(response)
  }

  getMany(req: Request, res: Response): Response {
    const { search, year } = req.query
    const response = service.getMany(search as string, year as string)

    return res.status(200).json(response)
  }

  getOne(req: Request, res: Response): Response {
    const response = service.getOne(req.params.id)

    return res.status(200).json(response)
  }

  update(req: Request, res: Response): Response {
    const response = service.update(req.params.id, req.body)

    return res.status(206).json(response)
  }

  delete(req: Request, res: Response): Response {
    service.delete(req.params.id)

    return res.status(204).json()
  }
}
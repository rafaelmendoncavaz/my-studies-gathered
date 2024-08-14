import { Router } from "express"
import { Controller } from "../controllers/controller"
import { middlewares } from "../middlewares/middleware"

export const route = Router()
const cars = new Controller()

route.post("/", cars.create)

route.get("/", cars.getMany)

route.get("/:id", middlewares.validateRequest, cars.getOne)

route.patch("/:id", middlewares.validateRequest, cars.update)

route.delete("/:id", middlewares.validateRequest, cars.delete)
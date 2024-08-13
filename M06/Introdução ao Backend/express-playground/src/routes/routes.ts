import { Router, type Request, type Response } from "express"
import { Controllers } from "../controllers/controllers"
import { Middlewares } from "../middlewares/middlewares"

export const router = Router()
const controller = new Controllers()

router.get("/", controller.getProducts)

router.get("/:id", Middlewares.isIdValid, controller.getOneProduct)

router.post("/", controller.createProduct)

router.put("/", (req: Request, res: Response) => {

  return res.json({ message: "PUT: Hello World" })
})

router.delete("/:id", Middlewares.isIdValid, controller.deleteProduct)

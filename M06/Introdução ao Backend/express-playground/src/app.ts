import "express-async-errors"
import express, { json } from "express"
import { router } from "./routes/routes"
import { Middlewares } from "./middlewares/middlewares"

const app = express()

app.use(
  json()
)

app.use("/", router)

app.use(Middlewares.handleErrors)

export default app
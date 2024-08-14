import "express-async-errors"
import express, { json } from "express"
import { route } from "./routes/routes"
import { middlewares } from "./middlewares/middleware"

const app = express()

app.use(
  json()
)

app.use("/cars", route)
app.use(middlewares.handleErrors)

export default app
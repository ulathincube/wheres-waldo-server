import express from "express"
import wallpaperRouter from "./routes/wallpaper.js"
import indexRouter from "./routes/index.js"
import notFoundError from "./errors/not-found-error.js"
import errorHandler from "./errors/error-handler.js"
import cors from "cors"
import morgan from "morgan"

const app = express()

app.use(morgan("tiny"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/api/index", indexRouter)
app.use("/api/wallpapers", wallpaperRouter)

app.use("/{*splat}", notFoundError)
app.use(errorHandler)

export default app

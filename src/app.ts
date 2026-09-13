import express from "express"
import wallpaperRouter from "./routes/wallpaper.js"
import indexRouter from "./routes/index.js"
import notFoundError from "./errors/not-found-error.js"
import errorHandler from "./errors/error-handler.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/index", indexRouter)
app.use("/api/wallpapers", wallpaperRouter)

app.use("/{*splat}", notFoundError)
app.use(errorHandler)

export default app

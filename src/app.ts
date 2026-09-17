import express from "express"
import wallpaperRouter from "./routes/wallpaper.js"
import userRouter from "./routes/user.js"
import indexRouter from "./routes/index.js"
import notFoundError from "./errors/not-found-error.js"
import errorHandler from "./errors/error-handler.js"
import cors from "cors"
import morgan from "morgan"
import session from "express-session"
import { SESSION_SECRET } from "./utils/constants.js"

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"))

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 1000 * 60,
      sameSite: "strict",
    },
  })
)

app.use("/api/users", userRouter)
app.use("/api/index", indexRouter)
app.use("/api/wallpapers", wallpaperRouter)

app.use("/{*splat}", notFoundError)
app.use(errorHandler)

export default app

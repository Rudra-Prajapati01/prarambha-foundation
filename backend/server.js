import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectDB from "./config/db.js"

import adminRoutes from "./routes/adminRoutes.js"
import pageRoutes from "./routes/pageRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import galleryRoutes from "./routes/galleryRoutes.js"
import storyRoutes from "./routes/storyRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import logoRoutes from "./routes/logoRoutes.js"

dotenv.config()

connectDB()

const app = express()

/* =====================================
    MIDDLEWARE
===================================== */

app.use(cors())

app.use(express.json())

/* =====================================
    ROUTES
===================================== */

app.use("/api/admin", adminRoutes)

app.use("/api/pages", pageRoutes)

app.use("/api/upload", uploadRoutes)

app.use("/api/gallery", galleryRoutes)

app.use("/api/stories", storyRoutes)

app.use("/api/messages", messageRoutes)

app.use("/api/logo", logoRoutes)

/* =====================================
    ROOT
===================================== */

app.get("/", (req, res) => {

  res.send(
    "Prarambha Foundation API Running"
  )
})

/* =====================================
    SERVER
===================================== */

const PORT =
  process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  )
})
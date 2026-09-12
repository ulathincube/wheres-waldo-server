import app from "./app.js"
import { PORT } from "./utils/constansts.js"

app.listen(PORT, (error: unknown) => {
  if (error) throw error
  console.log(`--Server running on PORT ${PORT}--`)
})

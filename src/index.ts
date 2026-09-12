import app from "./app.js"

app.listen(5000, (error: any) => {
  if (error) throw error
  else console.log("--Server running--")
})

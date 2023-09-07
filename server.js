import app from "./app.js"

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`App started; listening on port ${port}`)
})
// initially this part was from index.js/ now app.js 
// While moving rmb to comment out first then remove after confirming 
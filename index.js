import express from "express"
import path from "path"
const app = express() 

app.use(express.static(path.resolve('assets')))

app.get("/", (req, res) => {
    res.sendFile(path.resolve('views', 'index.html'))
})

app.listen(8000, () => {
    console.log("connected to server")
})
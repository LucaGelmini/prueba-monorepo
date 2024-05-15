import cors from 'cors'
import express from 'express'

const a = 0

const PORT = 8080

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (_req, res) => res.send('Hello world'))

app.listen(PORT, () => console.log(`###\nListening to port ${PORT}\n###`))

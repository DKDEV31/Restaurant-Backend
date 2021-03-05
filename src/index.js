import express from 'express'
import { config } from 'dotenv'
config()
const app = express()
const port = process.env.PORT
app.use('/', (req, res, next) => {
  res.send('Coucou')
})
app.listen(port, () => console.log(`Application fonctionnelle sur le port: ${port}`))
const express = require('express')
const app = express()

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} │ URL: ${req.url} │ METHOD: ${req.method}`
  )
  return next()
}
app.use(logMiddleware)

app.get('/', logMiddleware, (req, res) => {
  return res.send(`Bem-Vindo, ${req.query.name} `)
})
app.get('/nome/:name', (req, res) => {
  return res.send(`Bem-Vindo, ${req.params.name} `)
})
app.listen(3000)

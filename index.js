const express = require('express')
const app = express()
const port = 3002

app.use('/configurator', express.static('public'))

app.use('/', express.static('root'))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
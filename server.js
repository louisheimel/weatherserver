var express = require('express')
var app = express()
var request = require('request')

app.use((req, res, next) => {
//  res.setHeader('Access-Control-Allow-Origin', 'https://sheltered-mesa-65680.herokuapp.com/')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})
app.get('/', (req, res) => {
  res.end('something happened...')
})

app.get('/:lat/:long', (req, res) => {
  console.log('request received')
  var allowable_url = 'https://nameless-citadel-16272.herokuapp.com/'
  var url = allowable_url + req.params.lat + '&lon=' + req.params.long + '&APPID=' + process.env.APPID
  request(url, (err, response, body) => {
    if (err) {
      console.log(err)
    }
    if (body) {
      console.log(body)
    }
    if (response) {
      console.log(response)
    }
    res.send(JSON.parse(response.body))
  })
})

app.listen(process.env.PORT || 3001)

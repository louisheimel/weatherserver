var express = require('express')
var app = express()
var request = require('request')
var requesting_site = 'https://nameless-waters-32535.herokuapp.com/'

app.use((req, res, next) => {
//  res.setHeader('Access-Control-Allow-Origin', 'https://sheltered-mesa-65680.herokuapp.com/')
  res.setHeader('Access-Control-Allow-Origin', requesting_site)
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})
app.get('/', (req, res) => {
  res.end('something happened...')
})

app.get('/:lat/:long', (req, res) => {
  console.log('request received')
  var api = 'http://api.openweathermap.org/data/2.5/weather?'
  var url = api + '&lat=' +  req.params.lat + '&lon=' + req.params.long + '&APPID=' + process.env.APPID
  console.log(process.env.APPID)
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

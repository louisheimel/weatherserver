var express = require('express')
var app = express()
var request = require('request')

app.get('/:lat/:long', (req, res) => {
  console.log('APPID is: ' + process.env.APPID)
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + req.params.lat + '&lon=' + req.params.long + '&APPID=' + process.env.APPID
  console.log('serving!')
  console.log(process.env)
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
    res.json(body)
  })
})

app.listen(process.env.PORT || 3001)

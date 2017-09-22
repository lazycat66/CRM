var express = require('express')
var requestData = require('../requestData')
var router = express.Router()

router.post('/api/message', function(req, res){
    console.log(req)
})

router.get('/api', function(req, res){
    console.log(req)
})

module.exports = router;

const express = require('express')
const router = express.Router()
const response = require('../../../ntework/response')
const controller = require('./index')

router.get('/', function(req, res){
    controller.list()
     .then((lista)=>{
        response.sucess(req, res, lista, 200)
     })
     .catch((err) =>{
        response.error(req, res, err, 500)
     })
})

router.get('/:id', function(req, res){
    controller.get(req.params.id)
    .then((user)=>{
        response.sucess(req, res, user, 200)
    })
    .catch((err)=>{
        response.error(req, res, err, 500)
    })
    
})

module.exports = router
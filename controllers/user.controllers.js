const {request, response} = require('express')

const {userCreateService} = require('../services/user.services')


const userCreateController = (req=request, res=response)=>{
    
    const body = req.body
    userCreateService(body).then((e)=>{
        res.json(e)
    }).catch((err)=>{
        let message = err.message.split('\n')
        res.json({
            "message":message[message.length-1].trim(),
            "code": err.code
        })
    })
    

}

module.exports = {userCreateController};
const express = require('express')
const cors = require('cors')


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users'

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

    }

    routes(){
        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Execute Aplication in the port: `, this.port)
        })
    }

}

module.exports = Server;
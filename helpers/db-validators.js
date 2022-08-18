const {rolFind} = require('../services/user.services')


const rolValid = async(rol)=>{
    const response = await rolFind(rol)
    if(response==null){
        throw new Error(`The rol ${rol} no faund in db`)
    }
}

module.exports = {rolValid}
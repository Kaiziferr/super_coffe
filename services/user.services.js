const {PrismaClient} = require('@prisma/client')
const bcryptjs = require('bcryptjs')

const prisma = new PrismaClient();

const userCreateService = async (body)=>{
    const salt = bcryptjs.genSaltSync()
    body.password = bcryptjs.hashSync(body.password, salt)
    const response = await prisma.User.create({data:body})
    const newResponse = exclusionElements(response)
    return newResponse
}

const rolFind = async (rol)=>{
    
    try {
        const response = await prisma.RolUser.findUnique({
            where:{
                rol: rol
            },
        })
 
       return response
    } catch (error) {
        console.error(error)
    }    
}

function exclusionElements(user){
    const {password, ...usuario} = user;
    return usuario;
}

module.exports = {userCreateService, rolFind}
const {validationResult} = require('express-validator')


const validator_params = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next()

}

module.exports = {
    validator_params
}


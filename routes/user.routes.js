const {Router} = require('express');
const { check } = require('express-validator');

const {validator_params} = require('../middlewares/validator_params')
const {rolValid} = require('../helpers/db-validators')
const {userCreateController} = require('../controllers/user.controllers')


const router = Router();

router.post('/profile/create', [
    check('user_name', 'The name is required').not().isEmpty(),
    check('password', 'The password is required and must have more than six characters').not().isEmpty().isLength({min:6}),
    check('email', 'This is email is not valid').isEmail(),
    check('rol').custom((rol)=>rolValid(rol)),
    validator_params  
    
],userCreateController)

module.exports = router;
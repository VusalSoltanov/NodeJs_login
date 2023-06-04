const express = require('express');
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');
const { UserController } = require('../controllers/userController');

const router = express.Router();


router.get('/', UserController.getAll)
router.get('/:id', UserController.getById)
router.post("/login", UserController.login);

router.post(
    '/',
    [body("email").notEmpty().withMessage("email is required").isEmail().withMessage("email can't be empty"),],
    [body("password").notEmpty().withMessage("Password cannot be empty.").isLength({ min: 8 }).withMessage("Password cannot be less than 8 caracters!"),],
    validate,
    UserController.add)

router.delete('/:id', UserController.delete)


module.exports = router;
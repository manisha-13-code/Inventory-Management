const express = require('express')
const router = express.Router()
const { body } = require('express-validator') 
const userController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname').isLength({ min: 3}).withMessage('Full name must be at least 3 characters long'), 
    body('companyname').isLength({ min: 3}).withMessage('Company name must be at least 3 characters long'),       
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
userController.loginUser)

router.get('/logout', userController.logoutUser)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
module.exports = router

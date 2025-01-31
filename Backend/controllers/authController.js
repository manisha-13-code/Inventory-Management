const userModel = require('../models/User');
const userService = require('../services/service');  
const { validationResult } = require('express-validator');   
const blacklistToken = require('../models/blacklistToken.model');                                             

module.exports.registerUser = async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body)
    const { fullname, companyname, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });
    if(isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exist' });
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        fullname,
        companyname,
        email,
        password: hashedPassword
    });
    
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res)=> {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if(!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);   
    if(!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, user })
}

module.exports.getUserProfile = async (req, res)=> {
    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res)=> {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistToken.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
}

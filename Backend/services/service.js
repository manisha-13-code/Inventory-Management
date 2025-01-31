const userModel = require('../models/User');

module.exports.createUser = async({
    fullname, companyname, email, password
}) => {
    if(!fullname || !companyname|| !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname,
        companyname,
        email,
        password
    })

    return user;
}
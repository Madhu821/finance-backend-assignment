const authService = require("../services/authService");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
    try{
        const user = await authService.registerUser(req.body);
        
        const { password, ...userWithoutPassword } = user;
        res.status(201).json({
            message: "User Registered Successufully",
            user: userWithoutPassword,
        });
    }catch (err){
        res.status(400).json({
            message: err.message,
        });
    }
};

const login = async (req, res) => {
    try{
        const user = await authService.loginUser(req.body);

        const token = generateToken(user);

        res.json({
            token,
        });
    }catch(err){
        res.status(401).json({
            message: err.message,
        });
    };
};

module.exports = {register, login};
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const registerUser = async ({name, email, password, role}) => {
    // check if user exists
    const existingUser = await prisma.user.findUnique({
        where: {email},
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //create user
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password: hashPassword,
            role: role || "VIEWER",
        },
    });

    return user;
};

const loginUser = async ({email, password}) => {
    const user = await prisma.user.findUnique({
        where: {email},
    });
    if (!user){
        throw new Error("Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch){
        throw new Error("Invalid Credentials");
    }

    return user;
};

module.exports = {registerUser, loginUser};
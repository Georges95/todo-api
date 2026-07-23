const asyncHandler = require("../middlewares/asyncHandler");

const authService = require("../services/authService");

const register = asyncHandler(async(req,res)=>{

    const user = await authService.register(

        req.body.username,

        req.body.password

    );

    res.status(201).json(user);

});

const login = asyncHandler(async(req,res)=>{

    const token = await authService.login(

        req.body.username,

        req.body.password

    );

    res.json({

        token

    });

});

module.exports={

    register,

    login

};
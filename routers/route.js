const express = require('express');
const route = express.Router();
const userModel = require('../models/member')
route.get('/',(req,res) => {
    try{
        res.status(201).json({
            Data: newuser,
            status: true,
            message: "Get data"
        });
    }catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    } 
});
route.post('/register',async (req,res) => {
    try{
        const data = req.body;
        
        const newuser = userModel({
            Username:   data.Username,
            name:       data.name,
            email:      data.email,
            password:   data.password,
            phone:      data.phone
        });
        newuser.save();
        console.log(data);
        res.status(201).json({
            Data: newuser,
            status: true,
            message: "register Successfully! :)"
        });
    }catch{
        res.status(500).json({
            status: false,
            message: "Can't register! :("
        });
    }
});

route.post('/login', async (req,res) => {
    try{
        const data = req.body;

        const user =  await userModel.findOne({email: data.email, password: data.password})

        if (user){
            console.log(data);
            user.password = undefined;
            delete user.password;
            req.session.dataUser = user;
            res.status(202).json({Data: user,message: "Login Successfully! :)"
            });
        }else{
            console.log(data);
            res.status(400).json({
                status: false,
                message: "Login failed ! Please Try again:)"
            });
        }
    }catch{
        res.status(500).json({
            status: false,
            message: "Can't register! :("
        });
    }
});

route.get('/checkUserlogin',(req,res) => {
    try{
        if(req.session.dataUser){
            res.status(201).json(req.session.dataUser);
        }else{
            res.status(400).json({message:'User not Login'});
        }
        
    }catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    } 
});
module.exports = route;
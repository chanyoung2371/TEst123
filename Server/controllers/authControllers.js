'use strict'

const authDAO = require('../models/authDAO')
const bkfd = require('../middlewares/bkfd2');

async function logout(req,res,next){
    req.logout();
    delete req.session.flash;
    delete req.session.passport;
    res.redirect('/')
}

async function login(req, res, next) {

}
async function registerUser(req,res,next){
    
}
async function updateUser(req,res,next){

}
async function deleteUser(req,res,next){

}

module.exports = {
    logout,
    login,
    registerUser,
    updateUser,
    deleteUser,
}
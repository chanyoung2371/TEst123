var express = require('express');
var router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authControllers')
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/login-middlewares')

router.get('/logout', isLoggedIn, authController.logout)

router.get('/login', function(req, res,next){
    res.render('login')
})
// router.post('/login',
//     function(req,res){
//         console.log(req.body)
//     }
// )
router.post('/login', isNotLoggedIn , passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/api/auth/login',
    failureFlash: true,
}), async(req,res)=>{
    console.log(req)
})
router.get('/google', passport.authenticate('google-login',{
    scope: ["email", "profile"]
}))
router.get('/google/callback',  passport.authenticate('google-login',{
    successRedirect: '/',
    failureRedirect: '/api/auth/login',
    failureFlash: true
}))

router.post('/register', isNotLoggedIn, passport.authenticate('local-signup',{
    successRedirect: '/',
    failureRedirect: '/api/auth/register',
    failureFlash: true
}),function(req,res,next){
    req.status(200).json({
        user_register : true
    })
})



router.put('/update', isLoggedIn, authController.updateUser)

router.delete('/delete', isLoggedIn, authController.deleteUser)

module.exports = router;
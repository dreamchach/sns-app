const express = require('express')
const usersRouter = express.Router()
const passport = require('passport')
const User = require('../models/users.model')

usersRouter.post('/signup', async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }
})
usersRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        if(error) return next(error)
        if(!user) return res.json({msg : info})

        req.logIn(user, function (error) {
            if(error) return next(error)
        })
    })(req, res, next)
})
usersRouter.post('/logout', (req, res, next) => {
    req.logOut(function(error) {
        if(error) return next(error)
    })
})
usersRouter.get('/google', passport.authenticate('google'))
usersRouter.get('/google/callback', passport.authenticate('google'))
usersRouter.get('/kakao', passport.authenticate('kakao'))
usersRouter.get('/kakao/callback', passport.authenticate('kakao'))

module.exports = usersRouter
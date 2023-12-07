const express = require('express')
const router = express.Router({mergeParams : true})
const { checkAuthenticated, checkIsMe } = require('../middlewares/auth')
const Post = require('../models/posts.model')
const User = require('../models/users.model')

router.get('/', checkAuthenticated, (req, res) => {
    Post.find({'author.id' : req.params.id})
        .populate('comments')
        .sort({createdAt : -1})
        .exec()
        .then((posts) => {
            User.findById(req.params.id)
                .then((user) => {
                    console.log(user)
                    console.log(posts)
                })
                .catch((error) => {
                    console.log('error')
                })
        })
        .catch((error) => {
            console.log('error')
        })
})

/*
router.get('/edit', checkIsMe, (req, res) => {
    console.log(req.user)
})
*/

router.put('/', checkIsMe, (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log(req.params.id, req.body)
        })
        .catch((error) => {
            console.log('error')
        })
})

module.exports = router
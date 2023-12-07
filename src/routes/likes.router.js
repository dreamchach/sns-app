const express = require('express')
const router = express.Router({mergeParams : true})
const { checkAuthenticated } = require('../middlewares/auth')
const Post = require('../models/posts.model')

router.put('/', checkAuthenticated, (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            if(post.likes.find((like) => like === req.user._id.toString())) {
                const updatedLikes = post.likes.filter((like) => like !== req.user._id.toString())
                Post.findByIdAndUpdate(post._id, {likes : updatedLikes})
                    .then(() => {
                        console.log('like')
                    })
                    .catch((error) => {
                        console.log('error')
                    })
            } else {
                Post.findByIdAndUpdate(post._id, {likes : post.likes.concat([req.user._id])})
                    .then(() => {
                        console.log('like')
                    })
                    .catch((error) => {
                        console.log('error')
                    })
            }
        })
        .catch((error) => {
            console.log('not found post')
        })
})

module.exports = router
const Post = require('../models/posts.model')
const Comment = require('../models/comments.model')
const User = require('../models/users.model')

// Protected Route
function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }
}

// Public Route
function checkNotAuthenticated(req, res, next) {
    if(!req.isAuthenticated()) {
        return next()
    }
}

function checkPostOwnerShip (req, res, next) {
    if(req.isAuthenticated()){
        Post.findById(req.params.id)
            .then((post) => {
                if(!post) {
                    console.log('포스트가 없습니다')
                } else {
                    if (post.author.id.equals(req.user._id)) {
                        req.post = post
                        next()                        
                    } else {
                        console.log('권한이 없습니다')
                    }
                }
            })
            .catch((error) => {
                console.log('에러가 발생했습니다')
            })
    }else {
        console.log('로그인을 먼저 해주세요')
    }
}

function checkCommentOwnership(req, res, next) {
    if(req.isAuthenticated()) {
        Comment.findById(req.params.commentId)
            .then((comment) => {
                if(comment.author.id.equals(req.user._id)) {
                    req.comment = comment
                    next()
                }
                else {
                    console.log('권한이 없습니다')
                }
            })
            .catch((error) => {
                console.log('댓글을 찾는 도중에 에러가 발생했습니다')
            })
    } else {
        console.log('로그인을 해주세요')
    }
}

function checkIsMe(req, res, next) {
    if(req.isAuthenticated()) {
        User.findById(req.params.id)
            .then((user) => {
                if(user._id.equals(req.user._id)) {
                    next()
                } else {
                    console.log('권한이 없습니다')
                }
            })
            .catch((error) => {
                console.log('유저를 찾는데 에러가 발생했습니다')
            })
    } else {
        console.log('먼저 로그인을 해주세요')
    }
}

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated,
    checkPostOwnerShip,
    checkCommentOwnership,
    checkIsMe
}
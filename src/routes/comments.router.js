const express = require('express')
const { checkAuthenticated, checkCommentOwnership } = require('../middlewares/auth')
const router = express.Router({mergeParams : true})
const Post = require('../models/posts.model')
const Comment = require('../models/comments.model')

router.post('/', checkAuthenticated, (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            Comment.create(req.body)
                .then((comment) => {
                    comment.author.id = req.user._id
                    comment.author.username = req.user.username
                    comment.save()

                    post.comments.push(comment)
                    post.save()

                    console.log('댓글이 생성되었습니다')
                })
                .catch((error) => {
                    console.log('댓글을 생성 중 에러가 발생했습니다')
                })
        })
        .catch((error) => {
            console.log('댓글을 생성 중 에러가 발생했습니다')
        })
})

router.delete('/:commentId', checkCommentOwnership, (req, res) => {
    Comment.findByIdAndDelete(req.params.commentId)
        .then(() => {
            console.log('댓글을 삭제했습니다')
        })
        .catch((error) => {
            console.log('댓글 삭제 중 에러가 발생했습니다')
        })
})

router.get('/:commentId/edit', checkCommentOwnership, (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            console.log(post)
            console.log(req.comment)
        })
        .catch((error) => {
            console.log('에러가 발생했습니다')
        })
})

router.put('/:commentId', checkCommentOwnership, (req, res) => {
    Comment.findByIdAndUpdate(req.params.commentId, req.body)
        .then(() => {
            console.log('댓글을 수정하는데 성공했습니다')
        })
        .catch((error) => {
            console.log('댓글을 수정하는데 에러가 발생했습니다')
        })
})


module.exports = router
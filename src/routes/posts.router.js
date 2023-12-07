const express = require('express')
const { checkAuthenticated, checkPostOwnerShip } = require('../middlewares/auth')
const router = express.Router()
const Post = require('../models/posts.model')
const multer = require('multer')
const path = require('path')

const storageEngine = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/assets/images'))
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname)
    }
})
const upload = multer({storage : storageEngine}).single('image')
router.post('/', checkAuthenticated, upload, (req, res, next) => {
    let desc = req.body.desc
    let image = req.file ? req.file.filename : ''

    Post.create({
        image : image,
        description : desc,
        author : {
            id : req.user._id,
            username : req.user.username
        }
    }).then(() => {
        console.log(image)
    })
    .catch((error) => {
        console.log('error')
    })
})

router.get('/', checkAuthenticated, (req, res) => {
    Post.find()
        .populate('comments')
        .sort({createdAt : -1})
        .exec()
        .then((posts) => {
            console.log(posts)
        })
        .catch((error) => console.log(error))
})

/*
router.get('/:id/edit', checkPostOwnerShip, (req, res) => {
    console.log(req.post)
})
*/

router.put('/:id', checkPostOwnerShip, (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then((post) => {
            console.log(post)
        })
        .catch((error) => {
            console.log('error')
        })
})

router.delete('/:id', checkPostOwnerShip, (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then((post) => {
            console.log(post)
        })
        .catch((error) => {
            console.log('error')
        })
})

module.exports = router
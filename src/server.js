const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 4000
const path = require('path')
const passport = require('passport')
const usersRouter = require('./routes/users.router')
const postsRouter = require('./routes/posts.router')
const commentsRouter = require('./routes/comments.router')
const profileRouter = require('./routes/profiles.router')
const likeRouter = require('./routes/likes.router')
const friendsRouter = require('./routes/friends.router')
const cors = require('cors')

require('dotenv').config()

// passport 미들웨어에 등록
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')

// mongoDB 연동
mongoose.connect(process.env.mongoDB_URI)
    .then(() => {
        console.log('mongoDB connected')
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.json())
app.use(cors())

// router
app.use('/auth', usersRouter)
app.use('/posts', postsRouter)
app.use('/posts/:id/comments', commentsRouter)
app.use('/profile/:id', profileRouter)
app.use('/friends', friendsRouter)
app.use('/posts/:id/like', likeRouter)

// 정적 파일 제공
app.use('/image', express.static(path.join(__dirname, '../uploads')))

// express error handling
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.send(error.message || 'Error Occurred')
})

// 시작페이지를 login페이지로 redirect
app.get('/', async (req, res, next) => {
    try {
        return res.status(200).send('hello')
    } catch (error) {
        next(error)
    }
})

// backend 최초 실행 시 사용되는 함수
app.listen(port, () => {
    console.log('port', port)
})
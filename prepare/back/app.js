const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app =express();
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();
db.sequelize.sync()
    .then(()=>{
        console.log('db연결 성공');
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    origin: '*',
    credentials: false,
})); // cors 어떤 서버에서만 요청을 받을 것인지

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',(rea,res)=>{
   res.send('hello express');
});

app.get('/api/posts',(rea,res)=>{
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello2'},
        {id: 3, content: 'hello3'}
    ]);
});

app.use('/post',postRouter);
app.use('/user',userRouter);

app.listen(3065, () =>{
    console.log('서버 실행중');
});
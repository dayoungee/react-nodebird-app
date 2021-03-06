const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const app =express();
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const morgan = require('morgan');

dotenv.config();
db.sequelize.sync()
    .then(()=>{
        console.log('db연결 성공');
    })
    .catch(console.error);

passportConfig();

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3060',
    credentials: true,
})); // cors 어떤 서버에서만 요청을 받을 것인지

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());


/*app.get('/',(rea,res)=>{
   res.send('hello express');
});*/

app.use('/posts',postsRouter);
app.use('/post',postRouter);
app.use('/user',userRouter);

/*app.use((err, req, res, next) =>{

}); // 에러는 기본적으로 내장되어 있어 굳이 구현하지 않아도 되지만, 내가 컨트롤 하고 싶다면 에러처리 미들웨어를 만들 수 있다.*/

app.listen(3065, () =>{
    console.log('서버 실행중');
});
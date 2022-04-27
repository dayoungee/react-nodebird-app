const express = require('express');
const postRouter = require('./routes/post')
const app =express();

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

app.use('./post',postRouter);

app.listen(3065, () =>{
    console.log('서버 실행중');
});
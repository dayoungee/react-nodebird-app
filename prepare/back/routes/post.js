const express = require('express');

const router = express.Router();

router.post('/',(rea,res)=>{
    res.json({id: 1, content: 'hello'});
});

router.delete('/',(rea,res)=>{
    res.json({id: 1});
});


module.exports = router;
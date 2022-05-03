const express = require('express');
const { Post, Image, User } = require('../models');
const router = express.Router();

router.get('/',async (req, res, next)=>{
    try{
        const posts = await Post.findAll({
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
            },{
                model: Image,
            }],
        });
        res.status(200).json(posts);
    } catch (error){
        console.error(error);
        next(error);
    }
});

module.exports = router;
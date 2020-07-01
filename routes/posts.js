const express = require('express')
const Post = require('../models/post')
const router = express.Router()

// Routes
router.get('/gt', (req, res) => res.send('we are on posts gt'))


module.exports = router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    const savePost = await post.save();
    res.json(savePost);
})


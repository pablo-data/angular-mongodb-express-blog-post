const Post = require('../models/post');
const { response } = require('express');

const controllePost = {};

controllePost.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

controllePost.createPost = async (req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description
    });

    await post.save();
    res.json({status: 'post created'});
};

controllePost.getPost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.json(post);
};

controllePost.editPost = async (req, res) => {
    const { id } = req.params;
    const post = {
        title: req.body.title,
        description: req.body.description
    };
    await Post.findByIdAndUpdate(id, {$set: post}, {new: true});
    res.json({status: 'post update'});
};

controllePost.deletePost = async (req, res) => {
    const { id } = req.params; 
    await Post.findByIdAndDelete(id);
    res.json({status: 'post delete'});
};

module.exports = controllePost;
const express = require('express');
const app = express();
const BlogPost = require('../models/blog-post.model');

app.get('/getAll', (req, res) => {
    BlogPost.find((err, blogPosts) => {
        if (err) {
            res.send("Error while getting data from database")
        } else {
            res.send(blogPosts)
        }
    })
})

app.get('/get', (req, res) => {
    const keyword = req.query.keyword;
    const id = req.query.id;
    let query = {};

    if (id != null) {
        query = { _id: id }
    } else {
        query = { title: { $regex: new RegExp(keyword, "i") } }
    }

    BlogPost.find(query, (err, blogPost) => {
        if (err) {
            res.send("Error while getting data from database")
        } else {
            res.send(blogPost)
        }
    })
})

app.post('/add', (req, res) => {
    const newBlogPost = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        category: req.body.category,
        likes: req.body.likes
    })

    newBlogPost.save()
        .then(() => res.status(200).send(newBlogPost))
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})

app.get('/delete', (req, res) => {
    const id = req.query.id;

    BlogPost.findByIdAndDelete(id)
        .then(() => res.json(id))
        .catch(err => {
            res.status(400).json('Error: ' + err)
        });
})

app.put('/update', (req, res) => {
    const id = req.body.id;

    const updatedBlogPost = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        category: req.body.category,
        likes: req.body.likes
    }

    BlogPost.findOneAndUpdate({_id: id}, updatedBlogPost, {new: true}, (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(result)
        }
    })
});

module.exports = app;
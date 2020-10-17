const express = require('express');
const app = express();
const port = 8080;

// routes
const message = require('./routes/message.route');
const blogPost = require('./routes/blog-post.route');

app.use('/message', message);
app.use('/blog-post', blogPost);

app.listen(port, () => {
    console.log('App listening at port: ' + port)
})
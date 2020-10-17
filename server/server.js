const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const db = mongoose.connection;
const MONGODB_URI = 'mongodb://localhost:27017/blogApp';
const bodyParser = require('body-parser');

// database
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Db is connected!')
});

// routes
const message = require('./routes/message.route');
const blogPost = require('./routes/blog-post.route');

app.use(bodyParser.json());
app.use('/message', message);
app.use('/blog-post', blogPost);

app.listen(port, () => {
    console.log('App listening at port: ' + port)
})
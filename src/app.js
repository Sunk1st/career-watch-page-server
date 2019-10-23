const path = require('path');
const express = require('express');

const app = express();

const videos = require('./lib/videos');

app.use('/api/videos', (req, res, next) => {
  res.status(200).json({
    message: 'Video Data fetched successfully!',
    videos: videos
  })
})

app.use((req, res, next) => {
  res.send('Hello from Express');
});

module.exports = app;
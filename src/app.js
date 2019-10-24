const express = require('express');

const app = express();

const videos = require('./lib/videos');

app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader(
  'Access-Control-Allow-Header',
  'Origin, X-Requested-With, Content-Type, Accept'
 );
 res.setHeader(
  'Access-Control-Allow-Methods',
  'GET, POST, PATCH, DELETE, OPTIONS'
 );
 next();
});

app.use('/api/videos', (req, res, next) => {
 res.status(200).json({
  message: 'Video Data fetched successfully!',
  videos: videos
 });
});

app.use((req, res, next) => {
 res.send('Hello from Express');
});

module.exports = app;

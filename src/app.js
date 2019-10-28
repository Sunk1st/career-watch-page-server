const path = require('path');
const express = require('express');

const videoData = require('./lib/video-data');

const app = express();

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
  message: 'Videos fetched successfully',
  videoData: videoData
 });
});

module.exports = app;

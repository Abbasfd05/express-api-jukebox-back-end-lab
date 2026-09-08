const dotenv = require('dotenv');

dotenv.config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

// Controllers
const TrackCtrl = require('./controllers/TrackCtrl');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes go here
app.post('/tracks', TrackCtrl.create);
app.get('/tracks', TrackCtrl.index);
app.get('/tracks/:id', TrackCtrl.show);
app.put('/tracks/:id', TrackCtrl.update);
app.delete('/tracks/:id', TrackCtrl.delete);

app.listen(3000, () => {
  console.log('The express app is ready!');
});

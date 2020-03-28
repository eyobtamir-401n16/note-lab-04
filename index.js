'use strict';

const minimist = require('minimist');
const mongoose = require('mongoose');

const dbUrl = '';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,

});


mongoose.disconnect();
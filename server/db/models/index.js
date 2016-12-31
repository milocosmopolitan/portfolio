'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.

const Post = require('./Posts');
const User = require('./Users');

// Form the associations

// exported just in case, but can also be fetched via db.model('Album') etc.

// let's keep export Model name to be singular
module.exports = {
  Post: Post,
  User: User
};

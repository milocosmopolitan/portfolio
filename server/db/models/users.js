'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notNull: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      len: [5, 25]
    }
  },
  role: {
    type: Sequelize.ENUM('Admin', 'Guest')
  }
});

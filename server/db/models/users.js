'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('users', {
  firstname: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
});

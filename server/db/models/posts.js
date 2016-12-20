'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('posts', {
  title: {
    type: DataTypes.STRING, // eslint-disable-line new-cap
    allowNull: false,    
  }
});

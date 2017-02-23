'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('posts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: Sequelize.TEXT,
  image: Sequelize.STRING,
  demoURL: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isUrl: true
    }
  },
  github: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isUrl: true,
      notNull: true
    }
  },
  technologies: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
    set: function(value) {
      let arrValue;
      if (!Array.isArray(value)) {
        arrValue = value.split(',').map(tag => tag.trim());
      } else {
        arrValue = value.map(tag => tag.trim());
      }
      this.setDataValue('technologies', arrValue);   //makes sure inputted value is an Array of listed
    }                                                 //technologies used
  },
  inputType: {
    type: Sequelize.ENUM('Project', 'Blog', 'Tutorial')
  }
});

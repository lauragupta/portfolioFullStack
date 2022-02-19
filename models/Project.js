const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technology: {
      type: DataTypes.TEXT,
      // references: {
      //   model: 'skill',
      //   key: 'technology',
      //},
    },
    softskill: {
      type: DataTypes.TEXT,
      // references: {
      //   model: 'skill',
      //   key: 'softskill',
      //},
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;

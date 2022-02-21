const sequelize = require('../config/connection');
const { Project } = require('../models');

const projectData = require('./projectData.json');
//const skillData = require('./skillData.json');

const seedDatabase = async () => {
  try {
    console.log("projectData", projectData)
    await sequelize.sync({ force: true });
    const projects = await Project.bulkCreate(projectData, {
      returning: true
    });
  } catch (err) {
    console.log(err);
  }

    process.exit(0);
};

seedDatabase();
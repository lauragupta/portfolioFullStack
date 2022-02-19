const sequelize = require('../config/connection');
const { Project } = require('../models');

const projectData = require('./projectData.json');
//const skillData = require('./skillData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const projects = await Project.bulkCreate(projectData, {
    });

    for (const project of projectData) {
        await Project.create({
            ...projects,
      
        });
    }

    process.exit(0);
};

seedDatabase();
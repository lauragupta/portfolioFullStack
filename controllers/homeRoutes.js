const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project } = require('../models');


router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
          //project,
            
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/projects', async (req, res) => {
  try {
      const projectsData = await Project.findAll({
          // include: [
          //     {
          //         model: Skill,
          //         attributes: ['technology', 'softskill' ],
          //     },
          // ],
      });
      const projects = projectsData.map((project) => project.get({ plain: true }));
      res.render('projects', {
        projects
          
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;
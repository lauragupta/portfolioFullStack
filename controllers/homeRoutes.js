const router = require('express').Router();
const sequelize = require('../config/connection');
//const { Project, Skill, Employment } = require('../models');


router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
          //project,
            
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/project', async (req, res) => {
  try {
      const projectData = await Project.findAll({
          // include: [
          //     {
          //         model: Skill,
          //         attributes: ['technology', 'softskill' ],
          //     },
          // ],
      });
      const projects = projectData.map((project) => projects.get({ plain: true }));
      res.render('project', {
        projects
          
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
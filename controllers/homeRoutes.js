const router = require('express').Router();
const sequelize = require('../config/connection');
//const { Project, Skill, Employment } = require('../models');


router.get('/', async (req, res) => {
    try {
        // const blogsData = await Blog.findAll({
        //     include: [
        //         {
        //             model: User,
        //             attributes: ['name', 'id' ],
        //         },
        //     ],
        // });
        // const blogs = blogsData.map((blog) => blog.get({ plain: true}));
        res.render('homepage', {
          //project,
            
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
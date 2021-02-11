// require express and enable express routing
const express = require('express');
const router = express.Router();

// GET /projects
router.get('/', (req, res, next) => {
    res.render('projects/index', {title: 'My Project'})
});

//make public
module.exports = router;
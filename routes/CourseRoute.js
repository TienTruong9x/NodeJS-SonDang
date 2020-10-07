const express = require('express');
const router = express.Router();
const courseController = require('../app/controller/CourseController');

router.post('/add', courseController.add);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

module.exports = router;

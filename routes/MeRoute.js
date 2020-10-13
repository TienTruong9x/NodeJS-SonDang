const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/course', meController.courseMe);
router.get('/news', meController.courseNews);
router.get('/trash/course', meController.courseTrash);

module.exports = router;

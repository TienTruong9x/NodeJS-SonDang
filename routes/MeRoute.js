const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/course', meController.courseMe);
router.get('/news', meController.courseNews);

module.exports = router;

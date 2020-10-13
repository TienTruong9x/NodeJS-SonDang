const Course = require('../models/Course');

class MeController {
    //[GET] /me/course
    courseMe(req, res, next) {
        res.render('me/meCourse');
    }

    //[GET]  /me/news
    courseNews(req, res, next) {}
}

module.exports = new MeController();

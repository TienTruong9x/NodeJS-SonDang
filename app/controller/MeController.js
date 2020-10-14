const Course = require('../models/Course');

class MeController {
    //[GET] /me/course
    courseMe(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, countDoc]) => {
                res.render('me/meCourse', { courses, countDoc });
            })
            .catch(next);
    }

    //[GET]  /me/news
    courseNews(req, res, next) {}

    //[GET] /me/trash/course
    courseTrash(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trashCourse', { courses });
            })
            .catch(next);
    }
}

module.exports = new MeController();

const Course = require("../models/Course");

class MeController {
  //[GET] /me/course
  courseMe(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/meCourse", { courses });
      })
      .catch(next);
  }

  //[GET]  /me/news
  courseNews(req, res, next) {}
}

module.exports = new MeController();

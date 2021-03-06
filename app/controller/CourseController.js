const Course = require("../models/Course");

class CourseController {
  //[GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/course", { course, title: "Detail Course" });
        // res.render('index', { title: 'Detail',course});
      })
      .catch(() => next());
  }

  //[GET] /course/create
  create(req, res, next) {
    res.render("course/create");
  }

  //[POST] /course/add
  add(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.video}/default.jpg`;
    const course = new Course(req.body);
    course.save().then(() => {
      res.redirect("/me/course");
    });
  }

  //[GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => res.render("course/edit", { course }))
      .catch(next);
  }

  //[PUT] /course/:id/
  editUpdate(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body).then(() => {
      res.redirect("/me/course");
    });
  }

  //[DELETE] /course/:id/
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  //[DELETE] /course/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  //[PATH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  //[POST] /course/handle-checkbox-all
  handleCheckboxAll(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIDs } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      case "restore":
        Course.restore({ _id: { $in: req.body.courseIDs } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      case "forceDel":
       
        break;
      default:
        res.json({ mesenger: "Action invalid" });
    }
  }
}

module.exports = new CourseController();

const { render } = require('node-sass');
const Course = require('../models/Course');

class CourseController {

    //[GET] /course/:slug
    show(req,res,next){
        Course.findOne({slug:req.params.slug})
        .then(course=>{
            res.render('course/course',{course,title:'Detail Course'});
            // res.render('index', { title: 'Detail',course});
        })
        .catch(()=>next());  
    }

    //[GET] /course/create
    create(req,res,next){
      res.render('course/create');
    }

    //[POST] /course/add
    add(req,res,next){
        req.body.image=`https://img.youtube.com/vi/${req.body.video}/default.jpg`;
        const course=new Course(req.body);
        course.save()
            .then(()=>{
                res.redirect('/');
            });
    }
}

module.exports = new CourseController();

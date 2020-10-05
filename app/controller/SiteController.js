class SiteController{

     //[GET] /
    index(req,res){
        res.render('index', { title: 'Express' });
    }

     //[GET] /search
    search(req,res){
        res.render("search");
    }
}

module.exports = new SiteController;
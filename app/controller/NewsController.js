class NewsController{

    //[GET] /news
    index(req,res){
        res.render("news",{title:"News"});
    }

    //[GET] /news/:slug
    showDetail(req,res){
        res.send("News detail");
    }
}

module.exports=new NewsController;
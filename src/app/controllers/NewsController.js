class NewsController {
    //[get]/news
    index(req, res) {
        res.render('news');
    };
    show(req, res){
        res.send('news details');
     };
}


      
module.exports = new NewsController;


const Course = require('../models/Course');
const mongoosePaser = require('../../ulti/mongoose');
class SiteController {
    //[get]/
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            // // Convert Mongoose Documents to plain JavaScript objects
            const coursesArray = mongoosePaser.multipleMongoToObject(courses);

            res.render('home',
                {

                    courses: coursesArray
                });
        } catch (error) {
            next(error);
        }

        // Course.find({}).then(courses => {
        //     courses = courses.map(course => course.toObject)
        //     res.render('home',
        //         {

        //             courses: courses
        //         });
        // }).catch(error => { next(error) });
    };


    search(req, res) {
        res.render('search');
    };
}
module.exports = new SiteController;

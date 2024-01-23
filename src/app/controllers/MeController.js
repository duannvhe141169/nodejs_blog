const Course = require('../models/Course');
const mongoosePaser = require('../../ulti/mongoose');
class MeController {
    //[get]/me/stored/course

    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({});
            const coursesArray = mongoosePaser.multipleMongoToObject(courses);
            res.render('me/stored-courses', {
                courses: coursesArray
            });
        } catch (error) {
            next(error);
        }
    };
    async trashCOurse(req, res, next) {
        try {
            const courses = await Course.findWithDeleted({ deleted: true });
            //res.json(courses);
            const coursesArray = mongoosePaser.multipleMongoToObject(courses);
            res.render('me/trash-courses', {
                courses: coursesArray
            });
        } catch (error) {
            next(error);
        }
    }
}
module.exports = new MeController;

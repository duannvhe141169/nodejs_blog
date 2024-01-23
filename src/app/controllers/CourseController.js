const Course = require("../models/Course");
const { MongoToObject } = require("../../ulti/mongoose");
const { validateAndThrow, CustomError } = require('../../ulti/validation');

class CourseController {
  //[get]/coursue/:slug

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        if (!course) {
          // Course not found, handle it as an error
          const error = new Error();
          error.status = 404;
          error.message = `Course with slug "${req.params.slug}" not found`;
          throw error;
        }

        const courseOutput = MongoToObject(course);

        res.render("courses/show", {
          course: courseOutput,
        });
      })
      .catch(next);
  }
  //[get]/coursue/create
  create(req, res, next) {
    res.render("courses/create");
  };

  //[Post]/coursue/store
  async store(req, res, next) {

    try {
      // Create a new course instance
      const course = new Course({
        name: req.body.name,
        description: req.body.description,
        videoId: req.body.videoId,
        image: `https://i3.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`,
      });

      // Attempt to save the document
      await course.save();

      // If the save is successful, send a success message
      res.redirect('/');
    } catch (error) {
      console.log(error);
      const customError = new Error('Save failed. Something went wrong.');
      next(customError);
    }

  };
  //[get]/coursue/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit', {
        course: MongoToObject(course)
      }))
      .catch(next);


  };
  //[PUT]/coursue/update
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  };
  //[patch]/coursue/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
    //  res.send(req.params.id);
  };
  //[PUT]/coursue/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  };
  //[PUT]/coursue/:id/deleteforce
  deleteForce(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  };


}
module.exports = new CourseController;

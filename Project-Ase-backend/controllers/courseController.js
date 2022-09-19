const courseController = require('../Modules/course_module');

const router = require('express').Router()

router.post('/addCourse', courseController.addCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse)
router.get('/allCourses', courseController.getAllCourses);
router.get('/:id',courseController.getOneCourse);


module.exports = router;
const studentController = require('../Modules/student_module');

const router = require('express').Router()

router.post('/addStudent', studentController.addStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent)
router.get('/allStudents', studentController.getAllStudents);
router.get('/:id',studentController.getOneStudent);


module.exports = router;
var express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/login',teacherController.teacher_login_get);
router.post('/login',teacherController.teacher_login_post);
router.get('/viewall',teacherController.teacher_viewall_get);//find
router.get('/edit/:id',teacherController.teacher_edit_get);
router.post('/edit/:id',teacherController.teacher_edit_post);//update
router.get('/delete/:id',teacherController.teacher_delete_get);//delete
router.get('/option',teacherController.teacher_option_get);
router.post('/add',teacherController.teacher_add_post);//create
router.get('/add',teacherController.teacher_add_get);

module.exports = router;
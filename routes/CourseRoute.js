const express = require('express');
const router = express.Router();
const courseController = require('../app/controller/CourseController');

router.post('/add', courseController.add);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.editUpdate);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/delete', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);

module.exports = router;

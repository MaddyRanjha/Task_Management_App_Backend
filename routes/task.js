const express = require('express');
const {
  createTask,
  deleteTask,
  editTask,
  getTask,
} = require('../controllers/tasks');
const router = express.Router({ mergeParams: true });

router.route('/').post(createTask);

router.route('/:id').get(getTask).delete(deleteTask).put(editTask);

module.exports = router;

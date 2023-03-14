const { Task } = require('../models/tasks');
const { User } = require('../models/user');

// @desc Create Task
exports.createTask = async (req, res, next) => {
  const user = await User.findById({ _id: req.body.user });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `No User found with this id of ${req.body.user}`,
    });
  }
  req.body.date = Date.now();
  req.body.noti = false;

  const task = await Task.create(req.body);
  return res.status(201).json({
    success: true,
    data: task,
  });
};

// @desc Delete Task

exports.deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(400).json({
      success: false,
      message: 'Task not Found',
    });
  }

  await task.deleteOne({ id: req.params.id });
  return res.status(200).json({
    success: true,
    data: task,
  });
};

// @desc Edit Task

exports.editTask = async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body);

  if (!task) {
    return res.status(400).json({
      success: false,
      message: 'Task not Found',
    });
  }

  // const updatedTask = await Task.save(req.body);
  return res.status(201).json({
    success: true,
    data: task,
  });
};

// @desc Get All Tasks

exports.getTask = async (req, res, next) => {
  console.log(req.params.id)
  const tasks = await Task.find({ user: req.params.id }).lean().exec();
  // console.log(tasks)

  if (!tasks) {
    return res.status(400).json({
      success: false,
      message: 'Task not Found',
    });
  }

  // const updatedTask = await Task.save(req.body);
  return res.status(200).json({
    success: true,
    data: tasks,
  });
};


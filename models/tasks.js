const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const { date, boolean } = require('joi');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String, required: true },
  editNoti: { type: Boolean, required: true},
  editTask: { type: Boolean, required: true},
  notification: { type: String, required: true },
  frequency: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'users', required: true },
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = { Task };

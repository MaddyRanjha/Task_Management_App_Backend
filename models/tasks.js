const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const { date, boolean } = require('joi');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String, required: true },
  noti: { type: Boolean, required: true},
  notification: { type: String, required: true },
  frequency: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'users', required: true },
});

const Task = mongoose.model('tasks', taskSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

module.exports = { Task };

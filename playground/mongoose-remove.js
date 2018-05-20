const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');
const { User } = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()
// Todo.findOneAndRemove({_id: '5b012ed7b2cb81a0bff7c360'}).then((todo) => {
//
// });
//
// Todo.findByIdAndRemove('5b012ed7b2cb81a0bff7c360').then((todo) => {
//   console.log(todo);
// })

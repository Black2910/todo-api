const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');
const { User } = require('./../server/models/users');

// var id = '5b00275083bf5728ac71a0c511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => console.log('Todos: ', todos));
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id: ', todo);
// }).catch((e) => console.log(e));
//
// UserfindByID
User.findById('5afeffd39b5d6d0af4f17bc5').then((user) => {
  if (!user) {
    return console.log('Id not found');
  }

  console.log('User by Id: ', user);
}).catch((e) => console.log(e));

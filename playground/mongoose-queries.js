//library imports
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '59ff8bf3f138cfa4351a075b';

if(!ObjectID.isValid(id)) {
  console.log('Id not valid');
} else {
  User.findById(id).then((user) => {
    if(!user) {
      return console.log('User not found!');
    } console.log('User', JSON.stringify(user, undefined, 2));
  }).catch((e) => console.log(e));
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

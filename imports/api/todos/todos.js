import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const Todos = new Mongo.Collection('todos');

const TodosSchema = new SimpleSchema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

Todos.attachSchema(TodosSchema);

export default Todos;
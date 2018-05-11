import Todos from '/imports/api/todos/todos';

test('Todos Schema validation', () => {
  const todoItem = {
    title: 'hello',
    description: 'world',
  }

  const result = Todos.insert(todoItem);
  expect(result).toBeTruthy();
});
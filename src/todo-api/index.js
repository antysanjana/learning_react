const express = require('express');
const app = express();
const port = 5173;

app.use(express.json());

app.listen(port, () => {
  console.log(`To-Do API server listening at http://localhost:${port}`);
})

let todos = [
  { id: 1, title: 'Do homework', completed: false },
  { id: 2, title: 'Read a book', completed: false },
];

//create a todo item
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Get all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

//update an item
app.put('/todos/:id', (req, res) => {
  let todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('The to-do item was not found.');
  
  const { title, completed } = req.body;
  todo.title = title !== undefined ? title : todo.title;
  todo.completed = completed !== undefined ? completed : todo.completed;
  res.json(todo);
});

//delete an item
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send('The to-do item was not found.');
  
  const deletedTodo = todos.splice(todoIndex, 1);
  res.json(deletedTodo);
});



// Get a single to-do item
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('The to-do item was not found.');
  res.json(todo);
});
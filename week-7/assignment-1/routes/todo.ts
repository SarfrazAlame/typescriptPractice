import express from 'express';
import { authenticateJwt, SECRET } from "../middleware/index";
import { Todo } from "../db";
const router = express.Router();

interface CreateTodoInput {
  title: string,
  description: string
}

 
router.post('/todos', authenticateJwt, (req, res) => {
  const inputs: CreateTodoInput = req.body;
  const done = false;
  const userId = req.headers["userId"];

  const newTodo = new Todo({ title: inputs.title, description: inputs.description, done, userId });

  newTodo.save()
    .then((savedTodo:CreateTodoInput) => {
      res.status(201).json(savedTodo);
    })
    .catch((err:Error) => {
      res.status(500).json({ error: 'Failed to create a new todo' });
    });
});

router.get('/todos', authenticateJwt, (req, res) => {
  const userId = req.headers["userId"];

  Todo.find({ userId })
    .then((todos: any) => {
      res.json(todos);
    })
    .catch((err:Error) => {
      res.status(500).json({ error: 'Failed to retrieve todos' });
    });
});


router.patch('/todos/:todoId/done', authenticateJwt, (req, res) => {
  const { todoId } = req.params;
  const userId = req.headers["userId"];

  Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true }, { new: true })
    .then((updatedTodo: any) => {
      if (!updatedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.json(updatedTodo);
    })
    .catch((err:Error) => {
      res.status(500).json({ error: 'Failed to update todo' });
    });
});

export default router
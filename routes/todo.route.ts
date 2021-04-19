import express from 'express'
import TodoController from '../controller/todo.controller';

import middleware from './middleware.route';

const todoRouter = express.Router();

todoRouter.get('/', TodoController.get);
todoRouter.post('/', middleware , TodoController.add);

export default todoRouter;
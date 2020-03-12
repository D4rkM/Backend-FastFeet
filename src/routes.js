import { Router } from 'express';

import UserController from './app/controllers/UserController';

import validateSessionStore from './app/validators/SessionStore';

const routes = new Router();

routes.post('/login', validateSessionStore, UserController.store);

export default routes;

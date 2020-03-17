import { Router } from 'express';

import auth from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';

import validateSessionStore from './app/validators/SessionStore';
import validateRecipientStore from './app/validators/RecipientStore';

const routes = new Router();

routes.post('/login', validateSessionStore, UserController.store);

routes.use(auth);

routes.post('/recipients', validateRecipientStore, RecipientController.store);

export default routes;

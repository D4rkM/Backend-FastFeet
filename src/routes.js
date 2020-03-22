import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import auth from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import DeliveryManController from './app/controllers/DeliveryMan';

import validateSessionStore from './app/validators/SessionStore';
import validateRecipientStore from './app/validators/RecipientStore';

const routes = new Router();
const upload = new multer(multerConfig);

routes.post('/login', validateSessionStore, UserController.store);

routes.use(auth);

routes.post('/recipients', validateRecipientStore, RecipientController.store);
routes.post('/delivery-man', upload.single('avatar_id'), DeliveryManController.store);

export default routes;

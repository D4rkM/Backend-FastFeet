import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import auth from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import DeliveryManController from './app/controllers/DeliveryManController';
import FileController from './app/controllers/FileController';

import validateSessionStore from './app/validators/SessionStore';
import validateRecipientStore from './app/validators/RecipientStore';
import validateDeliveryManStore from './app/validators/DeliveryManStore';
import validateDeliveryManUpdate from './app/validators/DeliveryManUpdate';

const routes = new Router();
const upload = new multer(multerConfig);

routes.post('/login', validateSessionStore, UserController.store);

routes.use(auth);

routes.post('/recipients', validateRecipientStore, RecipientController.store);

routes.get('/delivery-man', DeliveryManController.index);
routes.get('/delivery-man/:id', DeliveryManController.show)
routes.post('/delivery-man', validateDeliveryManStore, DeliveryManController.store);
routes.put('/delivery-man/:id', validateDeliveryManUpdate, DeliveryManController.update);
routes.delete('/delivery-man/:id', DeliveryManController.delete);

routes.post('/file', upload.single('file'), FileController.store);

export default routes;

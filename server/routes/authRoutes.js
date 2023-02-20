import { register, login, updateUser } from '../controllers/authController.js';
import express from 'express';
import authenticateUser from '../middleware/authentication.js';

const authRouter = express.Router();

authRouter.route('/register').post(register);
authRouter.route('/login').post(login);
authRouter.route('/updateUser').patch(authenticateUser, updateUser);

export default authRouter;

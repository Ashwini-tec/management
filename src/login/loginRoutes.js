import { Router } from 'express';
import * as loginController  from '../login/loginController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as loginSchema from './loginValidation.js';

const router = new Router();

/**
 * login
 */
router.post(
    '/login',
    validation(loginSchema.login()),
    loginController.loginUser
);

/**
 * guest login
 */
router.post(
    '/guestLogin',
    validation(loginSchema.guestLogin()),
    loginController.guestLoginUser
);

export default router;

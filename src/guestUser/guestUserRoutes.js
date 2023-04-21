import { Router } from 'express';
import * as guestUser  from '../guestUser/guestUserController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as guestUserSchema from './guestUserValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create gust user
 */
router.post(
    '/gust user',
    authenticate.verifyUser,
    validation(guestUserSchema.create()),
    guestUser.createGuestUser
);

/**
 * get gust user detail
 */
router.get(
    '/gust user',
    authenticate.verifyUser,
    guestUser.getGuestUser
);

/**
 * get gust user by id
 */
router.get(
    '/gust user/:id',
    authenticate.verifyUser,
    guestUser.getById
);

/**
 * update gust user detail
 */
router.put(
    '/gust user/:id',
    authenticate.verifyUser,
    validation(guestUserSchema.update()),
    guestUser.updateGuestUser
);


/**
 * delete guest gust user detail
 */
router.delete(
    '/gust user/:id',
    authenticate.verifyUser,
    guestUser.deleteGuestUser
);

export default router;

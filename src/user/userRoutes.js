import { Router } from 'express';
import * as user  from '../user/userController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as userSchema from './userValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create user
 */
router.post(
    '/user',
    authenticate.verifyUser,
    validation(userSchema.create()),
    user.createUser
);

/**
 * get user detail
 */
router.get(
    '/user',
    authenticate.verifyUser,
    user.getUser
);

/**
 * get user by id
 */
router.get(
    '/user/:id',
    authenticate.verifyUser,
    user.getById
);

/**
 * update user detail
 */
router.put(
    '/user/:id',
    authenticate.verifyUser,
    validation(userSchema.update()),
    user.updateUser
);


/**
 * delete user detail
 */
router.delete(
    '/user/:id',
    authenticate.verifyUser,
    user.deleteUser
);

/**
 * forgot password
 */
router.post(
    '/user/forgot/password',
    validation(userSchema.forgotPassword()),
    user.forgotPassword
);

/**
 * reset password
 */
router.post(
    '/user/reset/password',
    validation(userSchema.resetPassword()),
    user.resetPassword
);

/**
 * OTP verification
 */
router.post(
    '/user/otp/verify',
    validation(userSchema.otpVerification()),
    authenticate.verifyOTP
);

export default router;

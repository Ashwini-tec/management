import { Router } from 'express';
import * as guestUser  from '../guestUser/guestUserController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as guestUserSchema from './guestUserValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create guestUser
 */
router.post(
    '/guestUser',
    // authenticate.verifyUser,
    validation(guestUserSchema.create()),
    guestUser.createGuestUser
);

/**
 * get guestUser detail
 */
router.get(
    '/guestUser',
    authenticate.verifyUser,
    guestUser.getGuestUser
);

/**
 * get guestUser by id
 */
router.get(
    '/guestUser/:id',
    authenticate.verifyUser,
    guestUser.getById
);

/**
 * update guestUser detail
 */
router.put(
    '/guestUser/:id',
    authenticate.verifyUser,
    validation(guestUserSchema.update()),
    guestUser.updateGuestUser
);


/**
 * delete guest guestUser detail
 */
router.delete(
    '/guestUser/:id',
    authenticate.verifyUser,
    guestUser.deleteGuestUser
);

/**
 * forgot password
 */
router.post(
    '/guestUser/forgot/password',
    validation(guestUserSchema.forgotPassword()),
    guestUser.forgotPassword
);

/**
 * reset password
 */
router.post(
    '/guestUser/reset/password',
    validation(guestUserSchema.resetPassword()),
    guestUser.resetPassword
);

/**
 * OTP verification
 */
router.post(
    '/guestUser/otp/verify',
    validation(guestUserSchema.otpVerification()),
    authenticate.verifyOTPUser
);
export default router;

import { Router } from 'express';
import * as dashboardController  from '../dashboard/dashboardController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as dashboardSchema from './dashboardValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create dashboard
 */
router.get(
    '/dashboard',
    authenticate.verifyUser,
    dashboardController.createDashboard
);

/**
 * get subscribe detail
 */
router.post(
    '/subscribe',
    validation(dashboardSchema.subscribe()),
    // authenticate.verifyUser,
    dashboardController.subscribe
);

/**
 * get subscribe
 */
router.get(
    '/subscribe',
    authenticate.verifyUser,
    dashboardController.getSubscriber
);

/**
 * get unsubscribe
 */
router.post(
    '/unsubscribe',
    // authenticate.verifyUser,
    dashboardController.unSubscribe
);

/**
 * create utlies detail
 */
router.post(
    '/utiles',
    authenticate.verifyUser,
    validation(dashboardSchema.create()),
    dashboardController.utiles
);

/**
 * get utlies detail
 */
router.get(
    '/utiles',
    // authenticate.verifyUser,
    dashboardController.getUtils
);
export default router;

import { Router } from 'express';
import * as stateController  from '../state/stateController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as stateSchema from './stateValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create state
 */
router.post(
    '/state',
    authenticate.verifyUser,
    validation(stateSchema.create()),
    stateController.createState
);

/**
 * get state detail
 */
router.get(
    '/state',
    authenticate.verifyUser,
    stateController.getState
);

/**
 * get state by id
 */
router.get(
    '/state/:id',
    authenticate.verifyUser,
    stateController.getById
);

/**
 * update state detail
 */
router.put(
    '/state/:id',
    authenticate.verifyUser,
    validation(stateSchema.update()),
    stateController.updateState
);


/**
 * delete state detail
 */
router.delete(
    '/state/:id',
    authenticate.verifyUser,
    stateController.deleteState
);

export default router;

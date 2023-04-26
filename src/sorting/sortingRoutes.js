import { Router } from 'express';
import * as sortingController  from '../sorting/sortingController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as sortingSchema from './sortingValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create sorting
 */
router.post(
    '/sorting',
    authenticate.verifyUser,
    validation(sortingSchema.create()),
    sortingController.createSorting
);

/**
 * get sorting detail
 */
router.get(
    '/sorting',
    authenticate.verifyUser,
    sortingController.getSorting
);

/**
 * get sorting by id
 */
router.get(
    '/sorting/:id',
    authenticate.verifyUser,
    sortingController.getById
);

/**
 * update sorting detail
 */
router.put(
    '/sorting/:id',
    authenticate.verifyUser,
    validation(sortingSchema.update()),
    sortingController.updateSorting
);


/**
 * delete sorting detail
 */
router.delete(
    '/sorting/:id',
    authenticate.verifyUser,
    sortingController.deleteSorting
);

export default router;

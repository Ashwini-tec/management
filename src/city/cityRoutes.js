import { Router } from 'express';
import * as cityController  from '../city/cityController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as citySchema from './cityValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create city
 */
router.post(
    '/city',
    authenticate.verifyUser,
    validation(citySchema.create()),
    cityController.createCity
);

/**
 * get city detail
 */
router.get(
    '/city',
    // authenticate.verifyUser,
    cityController.getCity
);

/**
 * get city by id
 */
router.get(
    '/city/:id',
    // authenticate.verifyUser,
    cityController.getById
);

/**
 * update city detail
 */
router.put(
    '/city/:id',
    authenticate.verifyUser,
    validation(citySchema.update()),
    cityController.updateCity
);


/**
 * delete city detail
 */
router.delete(
    '/city/:id',
    authenticate.verifyUser,
    cityController.deleteCity
);

export default router;

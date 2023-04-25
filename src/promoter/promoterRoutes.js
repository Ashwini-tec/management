import { Router } from 'express';
import * as promoterController  from '../promoter/promoterController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as promoterSchema from './promoterValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create promoter
 */
router.post(
    '/promoter',
    authenticate.verifyUser,
    validation(promoterSchema.create()),
    promoterController.createPromoter
);

/**
 * get promoter detail
 */
router.get(
    '/promoter',
    authenticate.verifyUser,
    promoterController.getPromoter
);

/**
 * get promoter by id
 */
router.get(
    '/promoter/:id',
    authenticate.verifyUser,
    promoterController.getById
);

/**
 * update promoter detail
 */
router.put(
    '/promoter/:id',
    authenticate.verifyUser,
    validation(promoterSchema.update()),
    promoterController.updatePromoter
);


/**
 * delete promoter detail
 */
router.delete(
    '/promoter/:id',
    authenticate.verifyUser,
    promoterController.deletePromoter
);

/**
 *  promoters category
 */
router.post(
    '/promoter/category/event/:id',
    authenticate.verifyUser,
    validation(promoterSchema.category()),
    promoterController.promotersCategory
);

/**
 *  promoters category update
 */
router.post(
    '/promoter/category/event/:id/:idx',
    authenticate.verifyUser,
    validation(promoterSchema.category()),
    promoterController.promotersCategoryUpdate
);

/**
 *  promoters category delete
 */
router.put(
    '/promoter/category/event/:id/:idx',
    authenticate.verifyUser,
    promoterController.promotersCategoryDelete
);

export default router;

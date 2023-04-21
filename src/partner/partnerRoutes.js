import { Router } from 'express';
import * as partnerController  from '../partner/partnerController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as partnerSchema from './partnerValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create partner
 */
router.post(
    '/partner',
    authenticate.verifyUser,
    validation(partnerSchema.create()),
    partnerController.createPartner
);

/**
 * get partner detail
 */
router.get(
    '/partner',
    authenticate.verifyUser,
    partnerController.getPartner
);

/**
 * get partner by id
 */
router.get(
    '/partner/:id',
    authenticate.verifyUser,
    partnerController.getById
);

/**
 * update partner detail
 */
router.put(
    '/partner/:id',
    authenticate.verifyUser,
    validation(partnerSchema.update()),
    partnerController.updatePartner
);


/**
 * delete partner detail
 */
router.delete(
    '/partner/:id',
    authenticate.verifyUser,
    partnerController.deletePartner
);

export default router;

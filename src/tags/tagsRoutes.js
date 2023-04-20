import { Router } from 'express';
import * as tagsController  from '../tags/tagsController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as tagsSchema from './tagsValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create tags
 */
router.post(
    '/tags',
    validation(tagsSchema.create()),
    tagsController.createTags
);

/**
 * get tags detail
 */
router.get(
    '/tags',
    authenticate.verifyUser,
    tagsController.getTags
);

/**
 * get tags by id
 */
router.get(
    '/tags/:id',
    authenticate.verifyUser,
    tagsController.getById
);

/**
 * update tags detail
 */
router.put(
    '/tags/:id',
    authenticate.verifyUser,
    validation(tagsSchema.update()),
    tagsController.updateTags
);


/**
 * delete tags detail
 */
router.delete(
    '/tags/:id',
    authenticate.verifyUser,
    tagsController.deleteTags
);

export default router;

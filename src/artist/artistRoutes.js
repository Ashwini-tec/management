import { Router } from 'express';
import * as artistController  from '../artist/artistController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as artistSchema from './artistValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create artist
 */
router.post(
    '/artist',
    validation(artistSchema.create()),
    artistController.createArtist
);

/**
 * get artist detail
 */
router.get(
    '/artist',
    authenticate.verifyUser,
    artistController.getArtist
);

/**
 * get artist by id
 */
router.get(
    '/artist/:id',
    authenticate.verifyUser,
    artistController.getById
);

/**
 * update artist detail
 */
router.put(
    '/artist/:id',
    authenticate.verifyUser,
    validation(artistSchema.update()),
    artistController.updateArtist
);


/**
 * delete artist detail
 */
router.delete(
    '/artist/:id',
    authenticate.verifyUser,
    artistController.deleteArtist
);

export default router;

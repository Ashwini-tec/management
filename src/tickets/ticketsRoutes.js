import { Router } from 'express';
import * as ticketsController  from '../tickets/ticketsController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as ticketsSchema from './ticketsValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create tickets
 */
router.post(
    '/tickets',
    authenticate.verifyUser,
    validation(ticketsSchema.create()),
    ticketsController.createTickets
);

/**
 * get tickets detail
 */
router.get(
    '/tickets',
    authenticate.verifyUser,
    ticketsController.getTickets
);

/**
 * get tickets by id
 */
router.get(
    '/tickets/:id',
    authenticate.verifyUser,
    ticketsController.getById
);

/**
 * update tickets detail
 */
router.put(
    '/tickets/:id',
    authenticate.verifyUser,
    validation(ticketsSchema.update()),
    ticketsController.updateTickets
);


/**
 * delete tickets detail
 */
router.delete(
    '/tickets/:id',
    authenticate.verifyUser,
    ticketsController.deleteTickets
);

export default router;

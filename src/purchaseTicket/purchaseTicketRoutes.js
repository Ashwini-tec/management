import { Router } from 'express';
import * as purchaseTicketController  from '../purchaseTicket/purchaseTicketController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as purchaseTicketSchema from './purchaseTicketValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create purchaseTicket
 */
router.post(
    '/purchaseTicket',
    authenticate.verifyUser,
    validation(purchaseTicketSchema.create()),
    purchaseTicketController.purchaseTicket
);

/**
 * get purchaseTicket detail
 */
router.get(
    '/purchaseTicket',
    authenticate.verifyUser,
    purchaseTicketController.getPurchaseTicket
);

/**
 * get purchaseTicket by id
 */
router.get(
    '/purchaseTicket/:id',
    authenticate.verifyUser,
    purchaseTicketController.getById
);


export default router;

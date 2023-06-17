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
 * create purchaseTicket
 */
router.post(
    '/purchaseTicket/offline/:orderId',
    authenticate.verifyUser,
    validation(purchaseTicketSchema.mailOffline()),
    purchaseTicketController.purchaseTicketOffline
);

/**
 * update purchaseTicket
 */
router.put(
    '/purchaseTicket/:id',
    authenticate.verifyUser,
    validation(purchaseTicketSchema.update()),
    purchaseTicketController.update
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


/**
 * get purchaseTicket by eventId
 */
router.get(
    '/purchaseTicket/:eventId/:email',
    authenticate.verifyUser,
    purchaseTicketController.getByEventId
);

export default router;

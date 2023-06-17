import { Router } from 'express';
import * as eventListingController  from '../eventListing/eventListingController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as eventListingSchema from './eventListingValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create eventListing
 */
router.post(
    '/eventListing',
    authenticate.verifyUser,
    validation(eventListingSchema.create()),
    eventListingController.createEventListing
);

/**
 * get eventListing detail
 */
router.get(
    '/eventListing',
    // authenticate.verifyUser,
    eventListingController.getEventListing
);

/**
 * get eventListing by id
 */
router.get(
    '/eventListing/:id',
    // authenticate.verifyUser,
    eventListingController.getById
);

/**
 * update eventListing detail
 */
router.put(
    '/eventListing/:id',
    authenticate.verifyUser,
    validation(eventListingSchema.update()),
    eventListingController.updateEventListing
);


/**
 * delete eventListing detail
 */
router.delete(
    '/eventListing/:id',
    authenticate.verifyUser,
    eventListingController.deleteEventListing
);

/**
 * eventListing detail
 */
router.get(
    '/eventListing/guest/:userId',
    authenticate.verifyUser,
    eventListingController.getEventUserIdListing
);

/**
 * update eventListing partner or artist detail
 */
router.put(
    '/eventListing/details/:id',
    authenticate.verifyUser,
    validation(eventListingSchema.updateDetails()),
    eventListingController.editEventListingDetails
);

export default router;

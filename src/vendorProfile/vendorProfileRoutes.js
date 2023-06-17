import { Router } from 'express';
import * as vendorProfileController  from './vendorProfileController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as vendorProfileSchema from './vendorProfileValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create vendorProfile
 */
router.post(
    '/vendorProfile',
    authenticate.verifyUser,
    validation(vendorProfileSchema.create()),
    vendorProfileController.createVendorProfile
);

/**
 * get vendorProfile detail
 */
router.get(
    '/vendorProfile',
    authenticate.verifyUser,
    vendorProfileController.getVendorProfile
);

/**
 * get vendorProfile by id
 */
router.get(
    '/vendorProfile/:id',
    authenticate.verifyUser,
    vendorProfileController.getById
);

/**
 * update vendorProfile detail
 */
router.put(
    '/vendorProfile/:id',
    authenticate.verifyUser,
    validation(vendorProfileSchema.update()),
    vendorProfileController.updateVendorProfile
);

/**
 * update vendorProfile detail
 */
router.get(
    '/vendorProfile/guest/:guestId',
    authenticate.verifyUser,
    validation(vendorProfileSchema.update()),
    vendorProfileController.getVendorByGuestProfile
);


/**
 * delete vendorProfile detail
 */
router.delete(
    '/vendorProfile/:id',
    authenticate.verifyUser,
    vendorProfileController.deleteVendorProfile
);

export default router;

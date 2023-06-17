import { Router } from 'express';
import * as languageController  from '../language/languageController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as LanguageSchema from './languageValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create Language
 */
router.post(
    '/language',
    authenticate.verifyUser,
    validation(LanguageSchema.create()),
    languageController.createLanguage
);

/**
 * get Language detail
 */
router.get(
    '/language',
    // authenticate.verifyUser,
    languageController.getLanguage
);

/**
 * get Language by id
 */
router.get(
    '/language/:id',
    // authenticate.verifyUser,
    languageController.getById
);

/**
 * update Language detail
 */
router.put(
    '/language/:id',
    authenticate.verifyUser,
    validation(LanguageSchema.update()),
    languageController.updateLanguage
);


/**
 * delete Language detail
 */
router.delete(
    '/language/:id',
    authenticate.verifyUser,
    languageController.deleteLanguage
);

export default router;

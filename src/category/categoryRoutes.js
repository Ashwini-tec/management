import { Router } from 'express';
import * as categoryController  from '../category/categoryController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as categorySchema from './categoryValidation.js';
import * as authenticate from '../../middleware/auth.js';

const router = new Router();

/**
 * create category
 */
router.post(
    '/category',
    validation(categorySchema.create()),
    categoryController.createCategory
);

/**
 * get category detail
 */
router.get(
    '/category',
    authenticate.verifyUser,
    categoryController.getCategory
);

/**
 * get category by id
 */
router.get(
    '/category/:id',
    authenticate.verifyUser,
    categoryController.getById
);

/**
 * update category detail
 */
router.put(
    '/category/:id',
    authenticate.verifyUser,
    validation(categorySchema.update()),
    categoryController.updateCategory
);


/**
 * delete category detail
 */
router.delete(
    '/category/:id',
    authenticate.verifyUser,
    categoryController.deleteCategory
);

export default router;

import Joi from 'joi';

/**
 *
 * create category
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
    });
};

/**
 *
 * update category
 */
const update = () => {
    return Joi.object({
        name: Joi.string(),
        isActive: Joi.boolean(),
    });
};

export{
    create,
    update,
};

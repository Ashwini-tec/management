import Joi from 'joi';

/**
 *
 * create city
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
        image: Joi.string(),
    });
};

/**
 *
 * update city
 */
const update = () => {
    return Joi.object({
        name: Joi.string(),
        image: Joi.string(),
        isActive: Joi.boolean(),
    });
};

export{
    create,
    update,
};

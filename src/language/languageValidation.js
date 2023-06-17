import Joi from 'joi';

/**
 *
 * create language
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
    });
};

/**
 *
 * update language
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

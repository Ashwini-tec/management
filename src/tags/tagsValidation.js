import Joi from 'joi';

/**
 *
 * create tags
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
    });
};

/**
 *
 * update tags
 */
const update = () => {
    return Joi.object({
        name: Joi.string(),
    });
};

export{
    create,
    update,
};

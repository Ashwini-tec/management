import Joi from 'joi';

/**
 *
 * create sorting
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
    });
};

/**
 *
 * update sorting
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

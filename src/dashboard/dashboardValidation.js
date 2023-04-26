import Joi from 'joi';

/**
 *
 * create utils
 */
const create = () =>{
    return Joi.object({
        obj: Joi.object(),
    });
};

/**
 *
 * create subscribe
 */
const subscribe = () =>{
    return Joi.object({
        email: Joi.string().email(),
    });
};

export{
    create,
    subscribe,
};

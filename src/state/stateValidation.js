import Joi from 'joi';

/**
 *
 * create state
 */
const create = () =>{
    return Joi.object({
        name: Joi.string() ,
    });
};

/**
 *
 * update state
 */
const update = () => {
    return Joi.object({
        name: Joi.string() ,
    });
};

export{
    create,
    update,
};

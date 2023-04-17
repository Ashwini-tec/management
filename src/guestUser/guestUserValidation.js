import Joi from 'joi';

/**
 *
 * create user
 */
const create = () =>{
    return Joi.object({
        name: Joi.string() ,
        mobile: Joi.string() ,
        email: Joi.string().email() ,
        password: Joi.string() ,
        type: Joi.string(),
        permissions: Joi.array(),
    });
};

/**
 *
 * update user
 */
const update = () => {
    return Joi.object({
        name: Joi.string() ,
        mobile: Joi.string() ,
        email: Joi.string().email() ,
        password: Joi.string() ,
        permissions: Joi.array(),
    });
};

export{
    create,
    update,
};

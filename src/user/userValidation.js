import Joi from 'joi';

/**
 *
 * create user
 */
const create = () =>{
    return Joi.object({
        firstName: Joi.string().required(),
        middleName: Joi.string().allow(''),
        lastName: Joi.string().allow(''),
        mobile: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        permissions: Joi.array(),
    });
};

/**
 *
 * update user
 */
const update = () => {
    return Joi.object({
        firstName: Joi.string().required(),
        middleName: Joi.string().allow(''),
        lastName: Joi.string().allow(''),
        mobile: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        permissions: Joi.array(),
    });
};


export{
    create,
    update,
};

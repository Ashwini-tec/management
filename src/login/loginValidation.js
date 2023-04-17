import Joi from 'joi';

const login = () =>{
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
};

const guestLogin = () =>{
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string(),
        type: Joi.string(),
    });
};

export { login, guestLogin };

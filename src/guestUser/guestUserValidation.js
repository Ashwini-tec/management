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
        image:Joi.string() ,
        gender: Joi.string() ,
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
        image:Joi.string() ,
        gender: Joi.string() ,
    });
};


/**
 *
 * otp verification
 */
const otpVerification = () => {
    return Joi.object({
        email: Joi.string().email().required(),
        otp: Joi.number(),
    });
};

/**
 *
 * forgotPassword
 */
const forgotPassword = () => {
    return Joi.object({
        email: Joi.string().email().required(),
    });
};

/**
 *
 * reset password
 */
const resetPassword = () => {
    return Joi.object({
        email: Joi.string().email().required(),
    });
};

export{
    create,
    update,
    forgotPassword,
    resetPassword,
    otpVerification,
};

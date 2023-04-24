import Joi from 'joi';

/**
 *
 * create promoter
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
        eventId: Joi.string(),
        email: Joi.string(),
        mobile_number: Joi.string(),
        enable_offline_punching: Joi.boolean(),
        enable_bulk_offline_punching: Joi.boolean(),
    });
};

/**
 *
 * update promoter
 */
const update = () => {
    return Joi.object({
        name: Joi.string(),
        eventId: Joi.string(),
        email: Joi.string(),
        mobile_number: Joi.string(),
        enable_offline_punching: Joi.boolean(),
        enable_bulk_offline_punching: Joi.boolean(),
    });
};

/**
 *
 * promoters category
 */
const category = () => {
    return Joi.object({
        name: Joi.string(),
        maxTicketAssigned: Joi.string(),
        minPrice: Joi.string(),
        maxPrice: Joi.string(),
    });
};

export{
    create,
    update,
    category,
};

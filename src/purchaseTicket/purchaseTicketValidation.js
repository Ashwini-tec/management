import Joi from 'joi';

/**
 *
 * create purchaseTicket
 */
const create = () =>{
    return Joi.object({
        name: Joi.string(),
        eventId: Joi.string().required(),
        email: Joi.string(),
        promoted_by: Joi.string(),
        mobile: Joi.string(),
        ticket_category: Joi.string(),
        no_of_ticket: Joi.string(),
        amount: Joi.string(),
        payment_received: Joi.string(),
        payment_mode: Joi.string(),
    });
};

/**
 *
 * update purchaseTicket
 */
const update = () => {
    return Joi.object({
        name: Joi.string(),
        eventId: Joi.string().required(),
        email: Joi.string(),
        promoted_by: Joi.string(),
        mobile: Joi.string(),
        ticket_category: Joi.string(),
        no_of_ticket: Joi.string(),
        amount: Joi.string(),
        payment_received: Joi.string(),
        payment_mode: Joi.string(),
    });
};

export{
    create,
    update,
};

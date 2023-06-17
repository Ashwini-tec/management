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
        tickets: Joi.array().items({
            ticket_category: Joi.string(),
            no_of_ticket: Joi.string(),
            amount: Joi.string(),
            grandTotal: Joi.string(),
        }),
        payment_received: Joi.string(),
        payment_mode: Joi.string(),
        grandTotal: Joi.string(),
        guestid:Joi.string(),
        razorpay_payment_id:Joi.string(),
        payment_type:Joi.string(),
    });
};

/**
 *
 * create purchaseTicket
 */
const mailOffline = () =>{
    return Joi.object({
        name: Joi.string(),
        eventId: Joi.string().required(),
        email: Joi.string(),
        promoted_by: Joi.string(),
        mobile: Joi.string(),
        tickets: Joi.array().items({
            ticket_category: Joi.string(),
            no_of_ticket: Joi.string(),
            amount: Joi.string(),
            grandTotal: Joi.string(),
            date:Joi.string(),
        }),
        payment_received: Joi.string(),
        payment_mode: Joi.string(),
        grandTotal: Joi.string(),
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
        tickets: Joi.array().items({
            ticket_category: Joi.string(),
            no_of_ticket: Joi.string(),
            amount: Joi.string(),
            grandTotal: Joi.string(),
            date: Joi.string(),
        }),
        payment_received: Joi.string(),
        payment_mode: Joi.string(),
        grandTotal: Joi.string(),
        guestid:Joi.string(),
        razorpay_payment_id:Joi.string(),
        payment_type:Joi.string(),
        attended:Joi.boolean(),
    });
};

export{
    create,
    update,
    mailOffline,
};

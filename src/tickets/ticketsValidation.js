import Joi from 'joi';

/**
 *
 * create ticket
 */
const create = () =>{
    return Joi.object({
        eventId: Joi.string(),
        guestId: Joi.string(),
        ticket_type:Joi.string(),
        ticket_name:Joi.string(),
        start_date:Joi.string(),
        end_date:Joi.string(),
        start_time:Joi.string(),
        end_time:Joi.string(),
        price:Joi.number(),
        gst_type:Joi.string(),
        gst_included:Joi.boolean(),
        customer_price:Joi.string(),
        ticket_quantity:Joi.string(),
        primary_add_info:Joi.string(),
        secondary_add_info:Joi.string(),
        enable_ticket:Joi.boolean(),
        phase_slab_type: Joi.boolean(),
        next_ticket_slab:Joi.string().allow(''),
    });
};

/**
 *
 * update ticket
 */
const update = () => {
    return Joi.object({
        eventId: Joi.string(),
        guestId: Joi.string(),
        ticket_type:Joi.string(),
        ticket_name:Joi.string(),
        start_date:Joi.string(),
        end_date:Joi.string(),
        start_time:Joi.string(),
        end_time:Joi.string(),
        price:Joi.number(),
        gst_type:Joi.string(),
        gst_included:Joi.boolean(),
        customer_price:Joi.string(),
        ticket_quantity:Joi.string(),
        primary_add_info:Joi.string(),
        secondary_add_info:Joi.string(),
        enable_ticket:Joi.boolean(),
        phase_slab_type: Joi.boolean(),
        next_ticket_slab:Joi.string().allow(''),
    });
};

export{
    create,
    update,
};

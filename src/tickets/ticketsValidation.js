import Joi from 'joi';

/**
 *
 * create ticket
 */
const create = () =>{
    return Joi.object({
        guestId: Joi.string(),
        ticket_type:Joi.string(),
        ticket_name:Joi.string(),
        start_date:Joi.string(),
        end_date:Joi.string(),
        start_time:Joi.string(),
        end_time:Joi.string(),
        price:Joi.string(),
        gst_type:Joi.string(),
        gst_included:Joi.boolean(),
        customer_price:Joi.string(),
        ticket_quantity:Joi.string(),
        primary_add_info:Joi.string(),
        secondary_add_info:Joi.string(),
        enable_ticket:Joi.boolean(),
        phase_slab_type: Joi.boolean(),
        next_ticket_slab:Joi.string(),
    });
};

/**
 *
 * update ticket
 */
const update = () => {
    return Joi.object({
        guestId: Joi.string(),
        ticket_type:Joi.string(),
        ticket_name:Joi.string(),
        start_date:Joi.string(),
        end_date:Joi.string(),
        start_time:Joi.string(),
        end_time:Joi.string(),
        price:Joi.string(),
        gst_type:Joi.string(),
        gst_included:Joi.boolean(),
        customer_price:Joi.string(),
        ticket_quantity:Joi.string(),
        primary_add_info:Joi.string(),
        secondary_add_info:Joi.string(),
        enable_ticket:Joi.boolean(),
        phase_slab_type: Joi.boolean(),
        next_ticket_slab:Joi.string(),
    });
};

export{
    create,
    update,
};

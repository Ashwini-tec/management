import Joi from 'joi';

/**
 *
 * create eventListing
 */
const create = () =>{
    return Joi.object({
        guestid: Joi.string(),
        status: Joi.string(),
        event_type: Joi.string(),
        event_title: Joi.string(),
        category: Joi.string(),
        tags: Joi.array(),
        event_cover_img: Joi.string(),
        event_day_type: Joi.string(),
        start_date: Joi.string(),
        end_date: Joi.string(),
        start_time: Joi.string(),
        end_time: Joi.string(),
        description: Joi.string(),
        term_conditions: Joi.string(),
        city: Joi.string(),
        venue_type: Joi.string(),
        select_venue: Joi.string(),
        other_venue: Joi.string(),
        select_venue_img: Joi.string(),
        select_venue_name: Joi.string(),
        venue_address: Joi.string(),
        latitude: Joi.string(),
        longitude: Joi.string(),
        artist: Joi.array(),
        partner: Joi.array(),
    });
};

/**
 *
 * update eventListing
 */
const update = () => {
    return Joi.object({
        guestid: Joi.string(),
        status: Joi.string(),
        event_type: Joi.string(),
        event_title: Joi.string(),
        category: Joi.string(),
        tags: Joi.array(),
        event_cover_img: Joi.string(),
        event_day_type: Joi.string(),
        start_date: Joi.string(),
        end_date: Joi.string(),
        start_time: Joi.string(),
        end_time: Joi.string(),
        description: Joi.string(),
        term_conditions: Joi.string(),
        city: Joi.string(),
        venue_type: Joi.string(),
        select_venue: Joi.string(),
        other_venue: Joi.string(),
        select_venue_img: Joi.string(),
        select_venue_name: Joi.string(),
        venue_address: Joi.string(),
        latitude: Joi.string(),
        longitude: Joi.string(),
        artist: Joi.array(),
        partner: Joi.array(),
    });
};

export{
    create,
    update,
};

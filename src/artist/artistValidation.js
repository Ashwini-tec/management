import Joi from 'joi';

/**
 *
 * create artist
 */
const create = () =>{
    return Joi.object({
        artist_name:Joi.string(),
        artist_img:Joi.string(),
        artist_bio:Joi.string(),
        fb_url:Joi.string(),
        insta_url:Joi.string(),
        twitter_url:Joi.string(),
        linkedin_url:Joi.string(),
    });
};

/**
 *
 * update artist
 */
const update = () => {
    return Joi.object({
        artist_name:Joi.string(),
        artist_img:Joi.string(),
        artist_bio:Joi.string(),
        fb_url:Joi.string(),
        insta_url:Joi.string(),
        twitter_url:Joi.string(),
        linkedin_url:Joi.string(),
        isActive: Joi.boolean(),
    });
};

export{
    create,
    update,
};

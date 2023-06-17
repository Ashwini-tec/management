import Joi from 'joi';

/**
 *
 * create partner
 */
const create = () =>{
    return Joi.object({
        partner_name:Joi.string(),
        partner_img:Joi.string(),
        partner_bio:Joi.string(), 
    });
};

/**
 *
 * update partner
 */
const update = () => {
    return Joi.object({
        partner_name:Joi.string(),
        partner_img:Joi.string(),
        partner_bio:Joi.string(), 
        isActive: Joi.boolean(),
    });
};

export{
    create,
    update,
};

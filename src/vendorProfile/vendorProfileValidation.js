import Joi from 'joi';

/**
 *
 * create vendor profile
 */
const create = () =>{
    return Joi.object({
        userId: Joi.string().allow(''),
        isGST: Joi.string().allow(''),
        GSTIN: Joi.string().allow(''),
        PAN: Joi.string().allow(''),
        organizationName: Joi.string().allow(''),
        organizationAddress: Joi.string().allow(''),
        state: Joi.string().allow(''),
        contact: Joi.string().allow(''),
        email: Joi.string().allow(''),
        accountType: Joi.string().allow(''),
        beneficiaryName: Joi.string().allow(''),
        accountName: Joi.string().allow(''),
        IFSC: Joi.string().allow(''),
        panImage: Joi.string().allow(''),
        cancelledChequeImage: Joi.string().allow(''),
        agreementSigning: Joi.string().allow(''),
    });
};

/**
 *
 * update vendor profile
 */
const update = () => {
    return Joi.object({
        userId: Joi.string().allow(''),
        isGST: Joi.string().allow(''),
        GSTIN: Joi.string().allow(''),
        PAN: Joi.string().allow(''),
        organizationName: Joi.string().allow(''),
        organizationAddress: Joi.string().allow(''),
        state: Joi.string().allow(''),
        contact: Joi.string().allow(''),
        email: Joi.string().allow(''),
        accountType: Joi.string().allow(''),
        beneficiaryName: Joi.string().allow(''),
        accountName: Joi.string().allow(''),
        IFSC: Joi.string().allow(''),
        panImage: Joi.string().allow(''),
        cancelledChequeImage: Joi.string().allow(''),
        agreementSigning: Joi.string().allow(''),
    });
};

export{
    create,
    update,
};

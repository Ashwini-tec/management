import Partner from './partnerDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createPartner = async(data) => {
    try {
        const PartnerData = await Partner.findOne({ name : data.name }).lean();
        if(PartnerData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Partner.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getPartner = async() => {
    try {
        const detail = await Partner.find({}).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const getById = async(id) => {
    try {
        const detail = await Partner.findById({ _id: id }).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @param {*} data
 * @returns
 */
const updatePartner = async(id, data) => {
    try {
        const PartnerData = await Partner.findOne({ name : data.name }).lean();
        if( PartnerData && id !== String(PartnerData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Partner.findByIdAndUpdate(
            { _id:id },
            data,
            { new:true }
        ).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const deletePartner = async(id) => {
    try {
        const detail = await Partner.findOneAndUpdate(
            { _id: id },
            { $set: { isActive: false }},
            { new : true }
        );
        return detail;
    } catch (error) {
        return error.message;
    }
};

export{
    createPartner,
    getPartner,
    getById,
    updatePartner,
    deletePartner,
};

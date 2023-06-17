import Promoter from './promoterDb.js';
import { MESSAGE } from '../../utils/constants.js';
import EventListing from '../eventListing/eventListingDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createPromoter = async(data) => {
    try {
        const detail = await Promoter.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getPromoter = async(eventId) => {
    try {
        let query = {};
        if(eventId){
            query = { eventId: eventId };
        }
        const detail = await Promoter.find(query).lean();
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
        const detail = await Promoter.findById({ _id: id }).lean();
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
const getByEventId = async(id) => {
    try {
        const detail = await Promoter.findById({ eventId: id }).lean();
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
const getByEmailId = async(email) => {
    try {
        const detail = await Promoter.find({ email: email }).populate('eventId').lean();
        if(!detail){
            return MESSAGE.DATA_NOT_FOUND;
        }
        const eventList = await EventListing.find({ _id: detail.eventId });
        detail.event = eventList;
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
const updatePromoter = async(id, data) => {
    try {
        const promoterData = await Promoter.findOne({ _id : id }).lean();
        if( promoterData && id !== String(promoterData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Promoter.findByIdAndUpdate(
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
const deletePromoter = async(id) => {
    try {
        const detail = await Promoter.findOneAndUpdate(
            { _id: id },
            { $set: { isActive: false }},
            { new : true }
        );
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
const promotersCategory = async(id, data) => {
    try {
        const promoterData = await Promoter.findOne({ _id : id }).lean();
        if( !promoterData ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const dataSet = promoterData?.category;
        dataSet.push(data);
        promoterData.category = dataSet;
        const detail = await Promoter.findOneAndUpdate(
            { _id: id },
            promoterData,
            { new : true }
        );
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
const promotersCategoryUpdate = async(id, data, idx) => {
    try {
        const promoterData = await Promoter.findOne({ _id : id }).lean();
        if( !promoterData ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        let category = promoterData.category;
        category[idx] = data;
        promoterData.category = category;
        const detail = await Promoter.findOneAndUpdate(
            { _id: id },
            promoterData,
            { new : true }
        );
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
const promotersCategoryDelete = async(id, idx) => {
    try {
        const promoterData = await Promoter.findOne({ _id : id }).lean();
        if( !promoterData ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        promoterData.category.splice(idx, 1);
        const detail = await Promoter.findOneAndUpdate(
            { _id: id },
            promoterData,
            { new : true }
        );
        return detail;
    } catch (error) {
        return error.message;
    }
};

export{
    createPromoter,
    getPromoter,
    getById,
    updatePromoter,
    deletePromoter,
    promotersCategory,
    promotersCategoryUpdate,
    promotersCategoryDelete,
    getByEmailId,
    getByEventId,
};

import EventListing from './eventListingDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createEventListing = async(data) => {
    try {
        const EventListingData = await EventListing.findOne({ name : data.name }).lean();
        if(EventListingData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await EventListing.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getEventListing = async() => {
    try {
        const detail = await EventListing.find({}).lean();
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
        const detail = await EventListing.findById({ _id: id }).lean();
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
const updateEventListing = async(id, data) => {
    try {
        const EventListingData = await EventListing.findOne({ name : data.name }).lean();
        if( EventListingData && id !== String(EventListingData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await EventListing.findByIdAndUpdate(
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
const deleteEventListing = async(id) => {
    try {
        const detail = await EventListing.findOneAndUpdate(
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
    createEventListing,
    getEventListing,
    getById,
    updateEventListing,
    deleteEventListing,
};

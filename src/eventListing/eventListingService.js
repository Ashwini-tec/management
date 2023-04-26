import EventListing from './eventListingDb.js';
import { MESSAGE } from '../../utils/constants.js';
import Tickets from '../tickets/ticketsDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createEventListing = async(data) => {
    try {
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
        const detail = await EventListing.find({}).select({ artist: 0, partner: 0}).lean();
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
        const detail = await EventListing.findById({ _id: id })
            .populate('category')
            .populate('city')
            .populate('tags.id')
            .lean();
        const tickets = await Tickets.find({ eventId: id}).lean();
        detail.tickets = tickets;
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
        const EventListingData = await EventListing.findOne({ _id : id }).lean();
        if( !EventListingData ){
            return MESSAGE.DATA_NOT_FOUND;
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

/**
 *
 * @param {*} id
 * @returns
 */
const editEventListingDetails = async(id, data, key, idx) => {
    try {
        const info = await EventListing.findOne({ _id: id }).lean();
        if (!info){
            return MESSAGE.DATA_NOT_FOUND;
        }
        info[key][idx] = data;
        const detail = await EventListing.findOneAndUpdate(
            { _id: id },
            info,
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
    editEventListingDetails,
};

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
const getEventListing = async(params) => {
    try {
        let query = {};
        if(params?.sorting){
            query.sorting = { $in: params?.sorting };
        }
        if(params?.language){
            query.language = { $in: params?.language };
        }
        if(params?.category){
            query.category = { $in: params?.category };
        }
        if(params?.city){
            query.city = { $in: params?.city };
        }
        if(params?.name){
            query.name = { $in: params?.name };
        }
        if(params?.type){
            query.type = { $in: params?.type };
        }
        if(params?.maxPrice && params?.minPrice){
            const eventDEtails = await Tickets.find({ price: { $gte: params?.minPrice, $lte: params?.maxPrice }}).lean();
            const eventIds = eventDEtails.map(ele => ele.eventId);
            query._id = { $in: eventIds };
        }
        if(params?.date){
            const timeStamp = Date.now();
            let date;
            if(params?.date?.toLowerCase() == 'today' ){
                date = {$lte: new Date(),$gt:new Date(timeStamp - 86400000)};
            } else if (params?.date?.toLowerCase() == 'tomorrow' ){
                date =  {$lte: new Date(timeStamp + 86400000), $gt: new Date()};
            }else{
                date = {$lte: new Date(timeStamp + 86400000 * 7), $gt:new Date()};
            }
            query.start_date = date;
        }
        const detail = await EventListing.find(query).select({ artist: 0, partner: 0}).lean();
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
            .populate('language')
            .populate('sorting')
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
 * @returns
 */
const getEventUserIdListing = async(id) => {
    try {
        const detail = await EventListing.findOne({ guestid: id })
            .populate('category')
            .populate('city')
            .populate('tags.id')
            .populate('language')
            .populate('sorting')
            .lean();
        const tickets = await Tickets.find({ userId: id}).lean();
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
    getEventUserIdListing,
};

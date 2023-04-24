import Tickets from './ticketsDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createTickets = async(data) => {
    try {
        const detail = await Tickets.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getTickets = async() => {
    try {
        const detail = await Tickets.find({}).lean();
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
        const detail = await Tickets.findById({ _id: id }).lean();
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
const updateTickets = async(id, data) => {
    try {
        const TicketsData = await Tickets.findOne({ _id : id }).lean();
        if( !TicketsData ){
            return MESSAGE.DATA_NOT_FOUND;
        }
        const detail = await Tickets.findByIdAndUpdate(
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
const deleteTickets = async(id) => {
    try {
        const detail = await Tickets.findOneAndUpdate(
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
    createTickets,
    getTickets,
    getById,
    updateTickets,
    deleteTickets,
};

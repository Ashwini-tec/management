import PurchaseTicket from './purchaseTicketDb.js';
// import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const purchaseTicket = async(data) => {
    try {
        const count = await PurchaseTicket.countDocuments({});
        let type = (data.payment_mode == 'offline') ? 'P' : 'U';
        const orderId = `SB${type}000${count}`;
        data.orderId = orderId; 
        const detail = await PurchaseTicket.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getPurchaseTicket = async() => {
    try {
        const detail = await PurchaseTicket.find({}).lean();
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
        const detail = await PurchaseTicket.findById({ _id: id }).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

export{
    purchaseTicket,
    getPurchaseTicket,
    getById,
};

import * as PurchaseTicketSevice from './purchaseTicketService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const purchaseTicket = async(req, res) => {
    try {
        const data = req.body;
        const detail = await PurchaseTicketSevice.purchaseTicket(data);
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns all the data
 */
const getPurchaseTicket = async(req, res) => {
    try {
        const detail = await PurchaseTicketSevice.getPurchaseTicket();
        return res.status(200).json({
            data: detail ?? [],
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns data by id
 */
const getById = async(req, res) => {
    try {
        const { id : purchaseTicket } = req.params;
        const detail = await PurchaseTicketSevice.getById(purchaseTicket);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export{
    purchaseTicket,
    getPurchaseTicket,
    getById,
};

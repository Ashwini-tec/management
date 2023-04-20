import * as ticketSevice from './ticketsService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createTickets = async(req, res) => {
    try {
        const data = req.body;
        const detail = await ticketSevice.createTickets(data);
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
const getTickets = async(req, res) => {
    try {
        const detail = await ticketSevice.getTickets();
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
        const { id : TicketId } = req.params;
        const detail = await ticketSevice.getById(TicketId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
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
 * @returns updated data
 */
const updateTickets = async(req, res) => {
    try {
        const { id: TicketId } = req.params;
        const data =  req.body;
        const detail = await ticketSevice.updateTickets(TicketId, data);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
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
 * @returns
 */
const deleteTickets = async(req, res) => {
    try {
        const { id: TicketId } = req.params;
        const detail = await ticketSevice.deleteTickets(TicketId);
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
    createTickets,
    getTickets,
    getById,
    updateTickets,
    deleteTickets,
};

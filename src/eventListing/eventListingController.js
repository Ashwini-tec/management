import * as eventListingSevice from './eventListingService.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createEventListing = async(req, res) => {
    try {
        const data = req.body;
        const detail = await eventListingSevice.createEventListing(data);
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
const getEventListing = async(req, res) => {
    try {
        const params = req.query;
        const detail = await eventListingSevice.getEventListing(params);
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
        const { id : eventListingId } = req.params;
        const detail = await eventListingSevice.getById(eventListingId);
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
 * @returns data by id
 */
const getEventUserIdListing = async(req, res) => {
    try {
        const { id : userId } = req.params;
        const detail = await eventListingSevice.getEventUserIdListing(userId);
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
const updateEventListing = async(req, res) => {
    try {
        const { id: eventListingId } = req.params;
        const data =  req.body;
        const detail = await eventListingSevice.updateEventListing(eventListingId, data);
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
const deleteEventListing = async(req, res) => {
    try {
        const { id: eventListingId } = req.params;
        const detail = await eventListingSevice.deleteEventListing(eventListingId);
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
const editEventListingDetails = async(req, res) => {
    try {
        const { id: eventListingId } = req.params;
        const key = req.body.key;
        const idx = req.body.idx;
        const data = {...req.body.data};
        const detail = await eventListingSevice.editEventListingDetails(eventListingId, data, key, idx);
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
    createEventListing,
    getEventListing,
    getById,
    updateEventListing,
    deleteEventListing,
    editEventListingDetails,
    getEventUserIdListing,
};

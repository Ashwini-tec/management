import * as promoterSevice from './promoterService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createPromoter = async(req, res) => {
    try {
        const data = req.body;
        const detail = await promoterSevice.createPromoter(data);
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
const getPromoter = async(req, res) => {
    try {
        const eventId = req.query.eventId;
        const detail = await promoterSevice.getPromoter(eventId);
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
        const { id : promoterId } = req.params;
        const detail = await promoterSevice.getById(promoterId);
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
const getByEventId = async(req, res) => {
    try {
        const { id : eventId } = req.params;
        const detail = await promoterSevice.getByEventId(eventId);
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
const getByEmailId = async(req, res) => {
    try {
        const { email } = req.params;
        const detail = await promoterSevice.getByEmailId(email);
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
const updatePromoter = async(req, res) => {
    try {
        const { id: promoterId } = req.params;
        const data =  req.body;
        const detail = await promoterSevice.updatePromoter(promoterId, data);
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
const deletePromoter = async(req, res) => {
    try {
        const { id: promoterId } = req.params;
        const detail = await promoterSevice.deletePromoter(promoterId);
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
const promotersCategory = async(req, res) => {
    try {
        const { id: promoterId } = req.params;
        const data = req.body;
        const detail = await promoterSevice.promotersCategory(promoterId, data);
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
const promotersCategoryUpdate = async(req, res) => {
    try {
        const { id: promoterId, idx } = req.params;
        const data = req.body;
        const detail = await promoterSevice.promotersCategoryUpdate(promoterId, data, idx);
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
const promotersCategoryDelete = async(req, res) => {
    try {
        const { id: promoterId, idx } = req.params;
        const detail = await promoterSevice.promotersCategoryDelete(promoterId, idx);
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

import * as partnerSevice from './partnerService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createPartner = async(req, res) => {
    try {
        const data = req.body;
        const detail = await partnerSevice.createPartner(data);
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
const getPartner = async(req, res) => {
    try {
        const detail = await partnerSevice.getPartner();
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
        const { id : PartnerId } = req.params;
        const detail = await partnerSevice.getById(PartnerId);
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
const updatePartner = async(req, res) => {
    try {
        const { id: PartnerId } = req.params;
        const data =  req.body;
        const detail = await partnerSevice.updatePartner(PartnerId, data);
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
const deletePartner = async(req, res) => {
    try {
        const { id: PartnerId } = req.params;
        const detail = await partnerSevice.deletePartner(PartnerId);
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
    createPartner,
    getPartner,
    getById,
    updatePartner,
    deletePartner,
};

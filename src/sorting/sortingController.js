import * as sortingSevice from './sortingService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createSorting = async(req, res) => {
    try {
        const data = req.body;
        const detail = await sortingSevice.createSorting(data);
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
const getSorting = async(req, res) => {
    try {
        const detail = await sortingSevice.getSorting();
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
        const { id : sortingId } = req.params;
        const detail = await sortingSevice.getById(sortingId);
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
const updateSorting = async(req, res) => {
    try {
        const { id: sortingId } = req.params;
        const data =  req.body;
        const detail = await sortingSevice.updateSorting(sortingId, data);
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
const deleteSorting = async(req, res) => {
    try {
        const { id: sortingId } = req.params;
        const detail = await sortingSevice.deleteSorting(sortingId);
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
    createSorting,
    getSorting,
    getById,
    updateSorting,
    deleteSorting,
};

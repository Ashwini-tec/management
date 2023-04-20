import * as tagsSevice from './tagsService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createTags = async(req, res) => {
    try {
        const data = req.body;
        const detail = await tagsSevice.createTags(data);
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
const getTags = async(req, res) => {
    try {
        const detail = await tagsSevice.getTags();
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
        const { id : tagsId } = req.params;
        const detail = await tagsSevice.getById(tagsId);
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
const updateTags = async(req, res) => {
    try {
        const { id: tagsId } = req.params;
        const data =  req.body;
        const detail = await tagsSevice.updateTags(tagsId, data);
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
const deleteTags = async(req, res) => {
    try {
        const { id: tagsId } = req.params;
        const detail = await tagsSevice.deleteTags(tagsId);
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
    createTags,
    getTags,
    getById,
    updateTags,
    deleteTags,
};

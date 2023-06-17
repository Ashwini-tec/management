import * as languageSevice from './languageService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createLanguage = async(req, res) => {
    try {
        const data = req.body;
        const detail = await languageSevice.createLanguage(data);
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
const getLanguage = async(req, res) => {
    try {
        const detail = await languageSevice.getLanguage();
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
        const { id : languageId } = req.params;
        const detail = await languageSevice.getById(languageId);
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
const updateLanguage = async(req, res) => {
    try {
        const { id: languageId } = req.params;
        const data =  req.body;
        const detail = await languageSevice.updateLanguage(languageId, data);
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
const deleteLanguage = async(req, res) => {
    try {
        const { id: languageId } = req.params;
        const detail = await languageSevice.deleteLanguage(languageId);
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
    createLanguage,
    getLanguage,
    getById,
    updateLanguage,
    deleteLanguage,
};

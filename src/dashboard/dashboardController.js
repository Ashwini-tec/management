import * as dashboardSevice from './dashboardService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createDashboard = async(req, res) => {
    try {
        const detail = await dashboardSevice.createDashboard();
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
const subscribe = async(req, res) => {
    try {
        const data = req.body;
        const detail = await dashboardSevice.subscribe(data);
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
 * @returns all the data
 */
const unSubscribe = async(req, res) => {
    try {
        const data = req.body;
        const detail = await dashboardSevice.unSubscribe(data);
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
 * @returns data all
 */
const getSubscriber = async(req, res) => {
    try {
        const params = req.query;
        const detail = await dashboardSevice.getSubscriber(params);
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
const utiles = async(req, res) => {
    try {
        const data =  req.body;
        const detail = await dashboardSevice.utiles(data);
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
const getUtils = async(req, res) => {
    try {
        const detail = await dashboardSevice.getUtils();
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
    subscribe,
    createDashboard,
    getSubscriber,
    utiles,
    getUtils,
    unSubscribe,
};

import * as guestUserSevice from './guestUserService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createGuestUser = async(req, res) => {
    try {
        const data = req.body;
        if(data.type.toLowerCase() !== 'p') {
            data.password = `${data.name}@123`;
        }
        delete data.type;
        const detail = await guestUserSevice.createGuestUser(data);
        if(detail.password)
            detail.password =  undefined;
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
const getGuestUser = async(req, res) => {
    try {
        const detail = await guestUserSevice.getGuestUser();
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
        const { id : userId } = req.params;
        const detail = await guestUserSevice.getById(userId);
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
const updateGuestUser = async(req, res) => {
    try {
        const { id: userId } = req.params;
        const data =  req.body;
        const detail = await guestUserSevice.updateGuestUser(userId, data);
        if(detail.password)
            detail.password =  undefined;
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
const deleteGuestUser = async(req, res) => {
    try {
        const { id: userId } = req.params;
        const detail = await guestUserSevice.deleteGuestUser(userId);
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
const forgotPassword = async(req, res) => {
    try {
        const { email } = req.body;
        const detail = await guestUserSevice.forgotPassword(email);
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
const resetPassword = async(req, res) => {
    try {
        const { email, password } = req.body;
        const detail = await guestUserSevice.resetPassword(email, password);
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
    createGuestUser,
    getGuestUser,
    getById,
    updateGuestUser,
    deleteGuestUser,
    resetPassword,
    forgotPassword,
};

import * as userSevice from '../user/userService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createUser = async(req, res) => {
    try {
        const data = req.body;
        const detail = await userSevice.createUser(data);
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
const getUser = async(req, res) => {
    try {
        const detail = await userSevice.getUser();
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
 * @returns data by id
 */
const getById = async(req, res) => {
    try {
        const { id : userId } = req.params;
        const detail = await userSevice.getById(userId);
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
const updateUser = async(req, res) => {
    try {
        const { id: userId } = req.params;
        const data =  req.body;
        const detail = await userSevice.updateUser(userId, data);
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
const deleteUser = async(req, res) => {
    try {
        const { id: userId } = req.params;
        const detail = await userSevice.deleteUser(userId);
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
        const detail = await userSevice.forgotPassword(email);
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
        const detail = await userSevice.resetPassword(email, password);
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
    createUser,
    getUser,
    getById,
    updateUser,
    deleteUser,
    forgotPassword,
    resetPassword,
};

import User from './userDb.js';
import { MESSAGE } from '../../utils/constants.js';
import bcrypt from 'bcrypt';
import * as mailer from '../../utils/email.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createUser = async(data) => {
    try {
        const userData = await User.findOne({ email : data.email }).lean();
        if(userData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        // bcrypt password
        data.password = bcrypt.hashSync(data.password, 10);
        const detail = await User.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getUser = async() => {
    try {
        const detail = await User.find({}).select({ password:0 }).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const getById = async(id) => {
    try {
        const detail = await User.findById({ _id: id }).select({ password: 0 }).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @param {*} data
 * @returns
 */
const updateUser = async(id, data) => {
    try {
        const userData = await User.findOne({ email : data.email }).lean();
        if( userData && id !== String(userData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        // bcrypt password
        data.password = bcrypt.hashSync(data.password, 10);
        const detail = await User.findByIdAndUpdate(
            { _id:id },
            data,
            { new:true }
        ).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const deleteUser = async(id) => {
    try {
        const detail = await User.findOneAndUpdate(
            { _id: id },
            { $set: { isActive: false }},
            { new : true }
        );
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const forgotPassword = async(email) => {
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        const info = await User.findOne({ email: email}).lean();
        if ( !info ){
            return MESSAGE.DATA_NOT_FOUND;
        }
        const detail = await User.updateOne(
            { email: email},
            { $set: { opt: otp }},
        );
        let mail = await mailer.forgotPassword(email, otp);
        if(!mail.sent){
            return mail.message;
        }
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const resetPassword = async(email, password) => {
    try {
        const info = await User.findOne({ email: email}).lean();
        if ( !info ){
            return MESSAGE.DATA_NOT_FOUND;
        }
        const pass = bcrypt.hashSync(password, 10);
        const detail = await User.UpdateOne(
            { email: email},
            { $set: { password: pass }},
        );
        return detail;
    } catch (error) {
        return error.message;
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

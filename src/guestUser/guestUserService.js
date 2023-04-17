import GuestUser from './guestUserDb.js';
import { MESSAGE } from '../../utils/constants.js';
import bcrypt from 'bcrypt';

/**
 *
 * @param {*} data
 * @returns
 */
const createGuestUser = async(data) => {
    try {
        const userData = await GuestUser.findOne({ email : data.email }).lean();
        if(userData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        // bcrypt password
        data.password = bcrypt.hashSync(data.password, 10);
        const detail = await GuestUser.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getGuestUser = async() => {
    try {
        const detail = await GuestUser.find({}).select({ password:0 }).lean();
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
        const detail = await GuestUser.findById({ _id: id }).select({ password: 0 }).lean();
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
const updateGuestUser = async(id, data) => {
    try {
        const userData = await GuestUser.findOne({ email : data.email }).lean();
        if( userData && id !== String(userData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        // bcrypt password
        data.password = bcrypt.hashSync(data.password, 10);
        const detail = await GuestUser.findByIdAndUpdate(
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
const deleteGuestUser = async(id) => {
    try {
        const detail = await GuestUser.findOneAndUpdate(
            { _id: id },
            { $set: { isActive: false }},
            { new : true }
        );
        return detail;
    } catch (error) {
        return error.message;
    }
};

export{
    createGuestUser,
    getGuestUser,
    getById,
    updateGuestUser,
    deleteGuestUser,
};

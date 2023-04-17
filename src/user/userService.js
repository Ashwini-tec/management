import User from './userDb.js';
import { MESSAGE } from '../../utils/constants.js';
import bcrypt from 'bcrypt';

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

export{
    createUser,
    getUser,
    getById,
    updateUser,
    deleteUser,
};

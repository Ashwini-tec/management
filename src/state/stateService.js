import State from './stateDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createState = async(data) => {
    try {
        const stateData = await State.findOne({ name : data.name }).lean();
        if(stateData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await State.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getState = async() => {
    try {
        const detail = await State.find({}).lean();
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
        const detail = await State.findById({ _id: id }).lean();
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
const updateState = async(id, data) => {
    try {
        const stateData = await State.findOne({ name : data.name }).lean();
        if( stateData && id !== String(stateData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await State.findByIdAndUpdate(
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
const deleteState = async(id) => {
    try {
        const detail = await State.findOneAndUpdate(
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
    createState,
    getState,
    getById,
    updateState,
    deleteState,
};

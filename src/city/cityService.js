import City from './cityDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createCity = async(data) => {
    try {
        const cityData = await City.findOne({ name : data.name }).lean();
        if(cityData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await City.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getCity = async() => {
    try {
        const detail = await City.find({}).lean();
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
        const detail = await City.findById({ _id: id }).lean();
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
const updateCity = async(id, data) => {
    try {
        const cityData = await City.findOne({ name : data.name }).lean();
        if( cityData && id !== String(cityData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await City.findByIdAndUpdate(
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
const deleteCity = async(id) => {
    try {
        const detail = await City.findOneAndUpdate(
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
    createCity,
    getCity,
    getById,
    updateCity,
    deleteCity,
};

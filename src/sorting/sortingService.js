import Sorting from './sortingDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createSorting = async(data) => {
    try {
        const SortingData = await Sorting.findOne({ name : data.name }).lean();
        if(SortingData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Sorting.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getSorting = async() => {
    try {
        const detail = await Sorting.find({}).lean();
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
        const detail = await Sorting.findById({ _id: id }).lean();
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
const updateSorting = async(id, data) => {
    try {
        const SortingData = await Sorting.findOne({ name : data.name }).lean();
        if( SortingData && id !== String(SortingData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Sorting.findByIdAndUpdate(
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
const deleteSorting = async(id) => {
    try {
        const detail = await Sorting.findOneAndUpdate(
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
    createSorting,
    getSorting,
    getById,
    updateSorting,
    deleteSorting,
};

import Category from './categoryDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createCategory = async(data) => {
    try {
        const CategoryData = await Category.findOne({ name : data.name }).lean();
        if(CategoryData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Category.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getCategory = async() => {
    try {
        const detail = await Category.find({}).lean();
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
        const detail = await Category.findById({ _id: id }).lean();
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
const updateCategory = async(id, data) => {
    try {
        const CategoryData = await Category.findOne({ name : data.name }).lean();
        if( CategoryData && id !== String(CategoryData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Category.findByIdAndUpdate(
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
const deleteCategory = async(id) => {
    try {
        const detail = await Category.findOneAndUpdate(
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
    createCategory,
    getCategory,
    getById,
    updateCategory,
    deleteCategory,
};

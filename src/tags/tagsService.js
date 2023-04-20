import Tags from './tagsDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createTags = async(data) => {
    try {
        const TagsData = await Tags.findOne({ name : data.name }).lean();
        if(TagsData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Tags.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getTags = async() => {
    try {
        const detail = await Tags.find({}).lean();
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
        const detail = await Tags.findById({ _id: id }).lean();
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
const updateTags = async(id, data) => {
    try {
        const TagsData = await Tags.findOne({ name : data.name }).lean();
        if( TagsData && id !== String(TagsData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Tags.findByIdAndUpdate(
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
const deleteTags = async(id) => {
    try {
        const detail = await Tags.findOneAndUpdate(
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
    createTags,
    getTags,
    getById,
    updateTags,
    deleteTags,
};

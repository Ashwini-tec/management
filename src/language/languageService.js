import Language from './languageDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createLanguage = async(data) => {
    try {
        const LanguageData = await Language.findOne({ name : data.name }).lean();
        if(LanguageData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Language.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getLanguage = async() => {
    try {
        const detail = await Language.find({}).lean();
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
        const detail = await Language.findById({ _id: id }).lean();
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
const updateLanguage = async(id, data) => {
    try {
        const LanguageData = await Language.findOne({ name : data.name }).lean();
        if( LanguageData && id !== String(LanguageData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Language.findByIdAndUpdate(
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
const deleteLanguage = async(id) => {
    try {
        const detail = await Language.findOneAndUpdate(
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
    createLanguage,
    getLanguage,
    getById,
    updateLanguage,
    deleteLanguage,
};

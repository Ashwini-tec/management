import Artist from './artistDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createArtist = async(data) => {
    try {
        const ArtistData = await Artist.findOne({ name : data.name }).lean();
        if(ArtistData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Artist.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getArtist = async() => {
    try {
        const detail = await Artist.find({}).lean();
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
        const detail = await Artist.findById({ _id: id }).lean();
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
const updateArtist = async(id, data) => {
    try {
        const ArtistData = await Artist.findOne({ name : data.name }).lean();
        if( ArtistData && id !== String(ArtistData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Artist.findByIdAndUpdate(
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
const deleteArtist = async(id) => {
    try {
        const detail = await Artist.findOneAndUpdate(
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
    createArtist,
    getArtist,
    getById,
    updateArtist,
    deleteArtist,
};

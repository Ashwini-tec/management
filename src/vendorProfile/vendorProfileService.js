import VendorProfile from './vendorProfileDb.js';
import { MESSAGE } from '../../utils/constants.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createVendorProfile = async(data) => {
    try {
        const VendorProfileData = await VendorProfile.findOne({ userId : data.userId }).lean();
        if(VendorProfileData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await VendorProfile.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getVendorProfile = async() => {
    try {
        const detail = await VendorProfile.find({}).populate('userId').lean();
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
        const detail = await VendorProfile.findById({ _id: id }).populate('userId').lean();
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
const updateVendorProfile = async(id, data) => {
    try {
        const VendorProfileData = await VendorProfile.findOne({ userId : data.userId }).lean();
        if( VendorProfileData && id !== String(VendorProfileData._id) ){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await VendorProfile.findByIdAndUpdate(
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
const deleteVendorProfile = async(id) => {
    try {
        const detail = await VendorProfile.findOneAndUpdate(
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
    createVendorProfile,
    getVendorProfile,
    getById,
    updateVendorProfile,
    deleteVendorProfile,
};

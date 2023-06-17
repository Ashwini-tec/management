import * as vendorProfileSevice from './vendorProfileService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createVendorProfile = async(req, res) => {
    try {
        const data = req.body;
        const detail = await vendorProfileSevice.createVendorProfile(data);
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns all the data
 */
const getVendorProfile = async(req, res) => {
    try {
        const detail = await vendorProfileSevice.getVendorProfile();
        return res.status(200).json({
            data: detail ?? [],
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns data by id
 */
const getById = async(req, res) => {
    try {
        const { id : vendorProfileId } = req.params;
        const detail = await vendorProfileSevice.getById(vendorProfileId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns updated data
 */
const updateVendorProfile = async(req, res) => {
    try {
        const { id: vendorProfileId } = req.params;
        const data =  req.body;
        const detail = await vendorProfileSevice.updateVendorProfile(vendorProfileId, data);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteVendorProfile = async(req, res) => {
    try {
        const { id: vendorProfileId } = req.params;
        const detail = await vendorProfileSevice.deleteVendorProfile(vendorProfileId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


/**
 *
 * @param {*} req
 * @param {*} res
 * @returns data by id
 */
const getVendorByGuestProfile = async(req, res) => {
    try {
        const { id : guestId } = req.params;
        const detail = await vendorProfileSevice.getVendorByGuestProfile(guestId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


export{
    createVendorProfile,
    getVendorProfile,
    getById,
    updateVendorProfile,
    deleteVendorProfile,
    getVendorByGuestProfile,
};

import Subscribe from './subscribeDb.js';
import Utils from './utils.js';
import { MESSAGE } from '../../utils/constants.js';
import VendorProfile from '../vendorProfile/vendorProfileDb.js';
import GuestUser from '../guestUser/guestUserDb.js';
import EventListing from '../eventListing/eventListingDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createDashboard = async() => {
    try {
        const publishedQuery = { status : 'Published' };
        const unPublishedQuery = { status : 'UnPublished' };
        const soldOutQuery = { status : 'SoldOut' };
        const cancelledQuery = { status : 'cancelled' };

        const vendorPublishCount = await VendorProfile.countDocuments(publishedQuery);
        const vendorUnPublishCount = await VendorProfile.countDocuments(unPublishedQuery);
        const vendorSoldOutCount = await VendorProfile.countDocuments(soldOutQuery);
        const vendorCancelledCount = await VendorProfile.countDocuments(cancelledQuery);

        const eventPublishCount = await EventListing.countDocuments(publishedQuery);
        const eventUnPublishCount = await EventListing.countDocuments(unPublishedQuery);
        const eventSoldOutCount = await EventListing.countDocuments(soldOutQuery);
        const eventCancelledCount = await EventListing.countDocuments(cancelledQuery);

        const customer = await GuestUser.find({}).lean();
        const detail = {
            vendorPublishCount,
            vendorUnPublishCount,
            vendorSoldOutCount,
            vendorCancelledCount,
            eventPublishCount,
            eventUnPublishCount,
            eventSoldOutCount,
            eventCancelledCount,
            customer: customer.length,
        };
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const subscribe = async(data) => {
    try {
        const subscribeData = await Subscribe.findOne({ email : data.email }).lean();
        if(subscribeData){
            return MESSAGE.DATA_ALREADY_EXIST;
        }
        const detail = await Subscribe.create(data);
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
const getSubscriber = async() => {
    try {
        const detail = await Subscribe.getSubscriber().lean();
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
const utiles = async(data) => {
    try {
        const utilsData = await Utils.find({}).lean();
        if( utilsData.length == 0 ){
            const info = Utils.create(data);
            return info;
        }
        const detail = await Utils.findByIdAndUpdate(
            { _id: utilsData[0]._id },
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
 * @param {*} data
 * @returns
 */
const getUtils = async(id) => {
    try {
        const utilsData = await Utils.find({_id: id}).lean();
        return utilsData;
    } catch (error) {
        return error.message;
    }
};

export{
    createDashboard,
    subscribe,
    getSubscriber,
    utiles,
    getUtils,
};

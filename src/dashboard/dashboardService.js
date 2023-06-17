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
        const cancelledQuery = { status : 'Cancelled' };

        const totalEventQuery = {};
        const totalApprovedQuery = { status : 'Approved' };
        const totalPendingQuery = { status : 'Pending' };
        const totalRejectedQuery = { status : 'Rejected' };

        const totalApprovedCount = await VendorProfile.countDocuments(totalApprovedQuery);
        const totalPendingCount = await VendorProfile.countDocuments(totalPendingQuery);
        const totalRejectedCount = await VendorProfile.countDocuments(totalRejectedQuery);

        const totalEventCount = await EventListing.countDocuments(totalEventQuery);
        const eventPublishCount = await EventListing.countDocuments(publishedQuery);
        const eventUnPublishCount = await EventListing.countDocuments(unPublishedQuery);
        const eventSoldOutCount = await EventListing.countDocuments(soldOutQuery);
        const eventCancelledCount = await EventListing.countDocuments(cancelledQuery);

        const customer = await GuestUser.find({}).lean();
        const detail = {
            totalEventCount,
            totalApprovedCount,
            totalPendingCount,
            totalRejectedCount,
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
            if(subscribeData.isActive == false){
                return MESSAGE.DATA_ALREADY_EXIST;
            }
            const info = await Subscribe.findOneAndUpdate({ email : data.email },{$set:{ isActive: false }},{ new:true}).lean();
            return info;
        }
        const detail = await Subscribe.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const unsubscribe = async(data) => {
    try {
        const subscribeData = await Subscribe.updateOne({ email : data.email },{$set:{ isActive: false }}).lean();
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
const getSubscriber = async(params) => {
    try {
        let query={};
        if(params?.email){
            query= {email: params.email};
        }
        const detail = await Subscribe.find(query).lean();
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
            const info = Utils.create({obj:data});
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
const getUtils = async() => {
    try {
        const utilsData = await Utils.find({}).lean();
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
    unsubscribe,
};

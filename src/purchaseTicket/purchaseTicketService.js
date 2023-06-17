import PurchaseTicket from './purchaseTicketDb.js';
import { MESSAGE } from '../../utils/constants.js';
import * as mailer from '../../utils/email.js';
import QRCode from 'qrcode';
import Promoter from '../promoter/promoterDb.js';
import EventListing from '../eventListing/eventListingDb.js';
import createInvoicePdf from '../../utils/invoicePdfCreate.js';

/**
 *
 * @param {*} data
 * @returns
 */
const purchaseTicket = async(data) => {
    try {
        const count = await PurchaseTicket.countDocuments({});
        let type = (data.payment_type == 'offline') ? 'U' : 'P';
        let arr = [];
        const countData = Array.from(String(count), Number);
        const len =  6 - countData.length;
        arr.length = len;
        arr.fill(0,0);
        arr = [...arr, ...countData];
        const orderId = `SB${type}${arr.join('')}`;
        data.order_Id = orderId;
        const isPromoter = await Promoter.findOne({email:data.email}).lean();
        if(isPromoter && data.payment_type === 'offline'){
            const noOfTickets = parseInt(data?.tickets[0]?.no_of_ticket);
            const ticketCategory = data?.tickets[0]?.ticket_category;
            const amount = parseInt(data?.tickets[0]?.amount);
            const promoterCategory = isPromoter.category;
            const isType = promoterCategory.find( i=> i.name == ticketCategory);
            if(!isType){
                return MESSAGE.CATEGORY_NOT_AVAILABLE;
            }

            if(parseInt(isType.minPrice) > amount && parseInt(isType.maxPrice) < amount ){
                return MESSAGE.AMOUNT_EXCEED;
            }

            if( parseInt(isType.maxTicketAssigned) < noOfTickets ){
                return MESSAGE.TICKET_COUNT_EXCEED;
            }
        }
        data.no_of_ticket = data.tickets?.reduce( ( acc, curr)=>{
            acc += parseInt(curr?.no_of_ticket) ?? 0;
            return acc;
        },0);
        const eventDetail = await EventListing.findOne({ _id: data.eventId }).lean();
        if(!eventDetail){
            return MESSAGE.EVENT_NOT_FOUND;
        }
        data.eventDetails = eventDetail;
        const qrCodeDataURL = await toDataURL(data.order_Id);
        if(data.payment_type !== 'offline'){
            const invoicePdf = await createInvoicePdf(data, qrCodeDataURL);
            data.pdf = invoicePdf;
            let mail = await mailer.invoiceMail(data.email, data, qrCodeDataURL,invoicePdf?.pdfURL);
            if(!mail.sent){
                return mail.message;
            }
            data.mailSend = true;
        }
        const detail = await PurchaseTicket.create(data);
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
const purchaseTicketOffline = async(data, id) => {
    try {
        const info = await PurchaseTicket.findOne({ order_Id: id }).lean();
        if(!info){
            return MESSAGE.DATA_NOT_FOUND;
        }
        const eventDetail = await EventListing.findOne({ _id: data.eventId }).lean();
        if(!eventDetail){
            return MESSAGE.EVENT_NOT_FOUND;
        }
        data.no_of_ticket = data.tickets?.reduce( ( acc, curr)=>{
            acc += parseInt(curr?.no_of_ticket) ?? 0;
            return acc;
        },0);
        data.eventDetails = eventDetail;
        data.order_Id = id;
        const qr = await toDataURL(id);
        const invoicePdf = await createInvoicePdf(data, qr);
        let mail = await mailer.invoiceMail(data.email, data,qr, invoicePdf?.pdfURL);
        if(!mail.sent){
            return mail.message;
        }
        data.pdf = invoicePdf;
        data.mailSend = true;
        const detail = await PurchaseTicket.findOneAndUpdate({_id : info._id },data, {new: true});
        return detail;
    } catch (error) {
        return error.message;
    }
};


/**
 *
 * @returns
 */
const getPurchaseTicket = async() => {
    try {
        const detail = await PurchaseTicket.find({}).populate('eventId').lean();
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
        const detail = await PurchaseTicket.findById({ _id: id }).lean();
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
const getByEventId = async(id, email) => {
    try {
        const detail = await PurchaseTicket.find({ eventId: id ,email: email,payment_mode:'offline'}).lean();
        const receivedCount = await PurchaseTicket.find({ eventId: id ,email: email,payment_mode:'offline', payment_received:'true'});
        const pendingCount = await PurchaseTicket.find({ eventId: id ,email: email,payment_mode:'offline', payment_received:'false'});
        detail.count = {
            total:detail.length,
            receivedCount,
            pendingCount,
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
const update = async(id , data) => {
    try {
        const detail = await PurchaseTicket.findOneAndUpdate(
            {_id: id},
            data,
            {new : true}
        );
        return detail;
    } catch (error) {
        return error.message;
    }
};


// /*********** Qr generator ******* */
// const generateQR = async text => {
//     try {
//         return await QRCode.toString(text);
//     } catch (err) {
//         return err.message;
//     }
// };



/*********** Qr generator url ******* */
const toDataURL = async text => {
    try {
        return await QRCode.toDataURL(text);
    } catch (err) {
        return err.message;
    }
};

export{
    purchaseTicket,
    getPurchaseTicket,
    getById,
    getByEventId,
    purchaseTicketOffline,
    update,
};

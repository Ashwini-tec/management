import PurchaseTicket from './purchaseTicketDb.js';
import { MESSAGE } from '../../utils/constants.js';
import * as mailer from '../../utils/email.js';
import QRCode from 'qrcode';
import Promoter from '../promoter/promoterDb.js';
import EventListing from '../eventListing/eventListingDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const purchaseTicket = async(data) => {
    try {
        const count = await PurchaseTicket.countDocuments({});
        let type = (data.payment_mode == 'offline') ? 'P' : 'U';
        let arr = [];
        const countData = Array.from(String(count), Number);
        const len =  6 - countData.length;
        arr.length = len;
        arr.fill(0,0);
        arr = [...arr, ...countData];
        const orderId = `SB${type}${arr.join('')}`;
        data.orderId = orderId;
        
        const isPromoter = await Promoter.findOne({email:data.email}).lean();
        if(isPromoter && type === 'offline'){
            const noOfTickets = parseInt(data?.tickets[0]?.no_of_ticket);
            const ticketCategory = data?.tickets[0]?.ticket_category;
            const amount = parseInt(data?.tickets[0]?.amount);
            const promoterCategory = isPromoter.category;
            const isType = promoterCategory.find( i=> i.ticketCategory == ticketCategory);
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
        const qr = await generateQR(data.orderId);
        console.log(qr);
        
        let mail = await mailer.invoiceMail(data.email, data, qr);
        if(!mail.sent){
            return mail.message;
        }
        const detail = await PurchaseTicket.create(data);
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
        const detail = await PurchaseTicket.find({}).lean();
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

/*********** Qr generator ******* */
const generateQR = async text => {
    try {
        return await QRCode.toString(text);
    } catch (err) {
        return err.message;
    }
};

export{
    purchaseTicket,
    getPurchaseTicket,
    getById,
};

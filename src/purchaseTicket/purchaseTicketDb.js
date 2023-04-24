import mongoose from 'mongoose';

const purchaseTicketSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    order_Id:{
        type: String,
    },
    email:{
        type: String,
    },
    promoted_by:{
        type: String,
    },
    mobile:{
        type: String,
    },
    ticket_category:{
        type: String,
    },
    no_of_ticket:{
        type: String,
    },
    amount:{
        type: String,
    },
    payment_received:{
        type: String,
    },
    payment_mode:{
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const PurchaseTicket = mongoose.model('purchaseTicket', purchaseTicketSchema);
export default PurchaseTicket;

import mongoose from 'mongoose';

const purchaseTicketSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eventListing',
    },
    guestid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest_user',
    },
    razorpay_payment_id:{
        type: String,
    },
    payment_type:{
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
    tickets: [
        {
            ticket_category:{
                type: String,
            },
            no_of_ticket:{
                type: String,
            },
            amount:{
                type: String,
            },
            totalAmount:{
                type: String,
            },
            date: {
                type:String,
            }
        }
    ],
    grandTotal: {
        type:String,
    },
    payment_received:{
        type: String,
    },
    payment_mode:{
        type: String,
    },
    mailSend:{
        type: Boolean,
        default: false,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    attended:{
        type: Boolean,
        default: false,
    },
    pdf:{}
}, { timestamps: true });


const PurchaseTicket = mongoose.model('purchaseTicket', purchaseTicketSchema);
export default PurchaseTicket;

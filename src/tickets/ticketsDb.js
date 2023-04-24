import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eventListing',
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest_user',
    },
    ticket_type:{
        type: String,
    },
    ticket_name:{
        type: String,
    },
    start_date:{
        type: String,
    },
    end_date:{
        type: String,
    },
    start_time:{
        type: String,
    },
    end_time:{
        type: String,
    },
    price:{
        type: String,
    },
    gst_type:{
        type: String,
    },
    gst_included:{
        type: Boolean,
        default: false,
    },
    customer_price:{
        type: String,
    },
    ticket_quantity:{
        type: String,
    },
    primary_add_info:{
        type: String,
    },
    secondary_add_info:{
        type: String,
    },
    enable_ticket:{
        type: Boolean,
        default: false,
    },
    phase_slab_type: {
        type: Boolean,
        default: false,
    },
    next_ticket_slab:{
        type: String,
    } ,
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Tickets = mongoose.model('ticket', ticketSchema);
export default Tickets;

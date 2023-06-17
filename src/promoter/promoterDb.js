import mongoose from 'mongoose';

const promoterSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eventListing',
    },
    email:{
        type: String,
    },
    mobile_number:{
        type: String,
    },
    enable_offline_punching:{
        type: Boolean,
        default: false,
    },
    enable_bulk_offline_punching:{
        type: Boolean,
        default: false,
    },
    make_parent_promoter:{
        type: Boolean,
        default: false,
    },
    status:{
        type: String,
    },
    category:[],
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Promoter = mongoose.model('promoter', promoterSchema);
export default Promoter;

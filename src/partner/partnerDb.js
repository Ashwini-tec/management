import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
    
    partner_name:{
        type: String
    },
    partner_img:{
        type: String
    },
    partner_bio:{
        type: String
    } ,
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Partner = mongoose.model('partner', partnerSchema);
export default Partner;

import mongoose from 'mongoose';

const VendorProfileSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest_user',
    },
    status:{
        type: String,
    },
    isGST: {
        type: Boolean,
    },
    GSTIN:{
        type: String,
    },
    PAN:{
        type: String,
    },
    organizationName:{
        type: String,
    },
    organizationAddress:{
        type: String,
    },
    state:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state',
    },
    contact:{
        type: String,
    },
    email:{
        type: String,
    },
    accountType:{
        type: String,
    },
    beneficiaryName: {
        type: String,
    },
    accountName: {
        type: String,
    },
    IFSC:{
        type: String,
    },
    panImage:{
        type: String,
    },
    cancelledChequeImage:{
        type: String,
    },
    agreementSigning:{
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const VendorProfile = mongoose.model('Vendor_profile', VendorProfileSchema);
export default VendorProfile;

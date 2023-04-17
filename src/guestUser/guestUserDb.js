import mongoose from 'mongoose';

const guestUserSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    mobile: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    permissions:[],

}, { timestamps: true });


const GuestUser = mongoose.model('guest_user', guestUserSchema);
export default GuestUser;

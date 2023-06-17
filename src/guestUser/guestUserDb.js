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
    otp:{ type: String },
    isActive:{
        type: Boolean,
        default: true,
    },
    userType:{
        type: String,
        default: 'guestUser',
    },
    image:{
        type: String,
    },
    gender:{
        type: String,
    }

}, { timestamps: true });


const GuestUser = mongoose.model('guest_user', guestUserSchema);
export default GuestUser;

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    otp:{ type : Number },
    role:{ type: String },
    uniqueId: {
        type: String,
    },
    permissions:[],

});

const User =  mongoose.model('user', userSchema);

export default User;

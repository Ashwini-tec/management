import mongoose from 'mongoose';

const subscribeSchema = new mongoose.Schema({

    email: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Subscribe = mongoose.model('subscribe', subscribeSchema);
export default Subscribe;

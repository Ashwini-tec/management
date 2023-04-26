import mongoose from 'mongoose';

const utilsSchema = new mongoose.Schema({

    obj: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Utils = mongoose.model('utils', utilsSchema);
export default Utils;

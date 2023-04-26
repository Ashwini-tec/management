import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Language = mongoose.model('language', languageSchema);
export default Language;

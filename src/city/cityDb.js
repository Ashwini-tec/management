import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({

    name: {
        type: String,
    },
    image: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const City = mongoose.model('city', citySchema);
export default City;

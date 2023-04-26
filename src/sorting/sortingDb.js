import mongoose from 'mongoose';

const sortingSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Sorting = mongoose.model('sorting', sortingSchema);
export default Sorting;

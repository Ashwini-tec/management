import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const State = mongoose.model('state', stateSchema);
export default State;

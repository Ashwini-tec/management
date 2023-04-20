import mongoose from 'mongoose';

const tagsSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Tags = mongoose.model('tag', tagsSchema);
export default Tags;

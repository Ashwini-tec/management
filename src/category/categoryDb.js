import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Category = mongoose.model('category', categorySchema);
export default Category;

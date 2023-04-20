import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({

    artist_name:{
        type: String,
    },
    artist_img:{
        type: String,
    },
    artist_bio:{
        type: String,
    },
    fb_url:{
        type: String,
    },
    insta_url:{
        type: String,
    },
    twitter_url:{
        type: String,
    },
    linkedin_url:{
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const Artist = mongoose.model('artist', artistSchema);
export default Artist;

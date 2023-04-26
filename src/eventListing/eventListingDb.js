import mongoose from 'mongoose';

const eventListingSchema = new mongoose.Schema({

    guestid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'guest_user',
    },
    status: {
        type: String,
    },
    event_type: {
        type: String,
    },
    event_title: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    },
    tags: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tag',
        },
    }],
    event_cover_img: {
        type: String,
    },
    event_day_type: {
        type: String,
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    start_time: {
        type: String,
    },
    end_time: {
        type: String,
    },
    description: {
        type: String,
    },
    term_conditions: {
        type: String,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city',
    },
    venue_type: {
        type: String,
    },
    select_venue: {
        type: String,
    },
    other_venue: {
        type: String,
    },
    select_venue_img: {
        type: String,
    },
    select_venue_name: {
        type: String,
    },
    venue_address: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    language:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'language',
    },
    sorting:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sorting',
    },
    artist:[],
    partner:[],
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });


const EventListing = mongoose.model('eventListing', eventListingSchema);
export default EventListing;

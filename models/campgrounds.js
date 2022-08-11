const mongoose = require('mongoose')
const { Schema } = mongoose;

const CampgroundSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type:String,
        required: true      
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        requred: true
    }
});

module.exports = mongoose.model('Campgrounds', CampgroundSchema);
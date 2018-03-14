var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duedate: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    status: String
});

mongoose.model('Course', courseSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: false}
});


module.exports = mongoose.model('Post', postSchema);
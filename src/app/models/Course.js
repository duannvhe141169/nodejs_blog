const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
var softDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name", required: true, unique: true }, 
    videoId: { type: String, required: true },
}, {
    timestamps: true,
});

// Add plugins
Course.plugin(softDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
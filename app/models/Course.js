const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//slug gennerator
var slug = require('mongoose-slug-generator');
//soft delete
var mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        slug: { type: String, slug: 'name', unique: true },
        video: String,
        level: String,
    },
    { timestamps: true },
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);

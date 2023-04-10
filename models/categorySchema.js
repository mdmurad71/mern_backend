


const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    subcategories: [{
        type: ObjectId,
        ref: 'subcategory'
    }]




},
    {
        timestamps: true
    }
);

const category = new mongoose.model("category", categorySchema);


module.exports = category;
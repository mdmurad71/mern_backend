

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    category: {
        type: ObjectId,
        ref: 'category'
    }




},
    {
        timestamps: true
    }
);

const Subcategory = new mongoose.model("subcategory", subcategorySchema);


module.exports = Subcategory;


const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }




},
    {
        timestamps: true
    }
);

const Subcategory = new mongoose.model("subcategory", subcategorySchema);


module.exports = Subcategory;
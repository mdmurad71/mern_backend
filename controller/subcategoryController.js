

const subcategory = require('../models/subcategorySchema');

exports.addSubcategory = async (req, res) => {

    const { name, category_id } = req.body;
    if (!name || !category_id) {
        res.status(422).json('pls fill the data')
    }

    try {

        const saveSubcategory = new subcategory({ name, category_id });
        await saveSubcategory.save();
        res.status(201).json(saveSubcategory);
        console.log(saveSubcategory);
    }
    catch (error) {
        res.status(422).json(error);
    }
}
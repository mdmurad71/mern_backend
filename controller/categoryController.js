
const category = require('../models/categorySchema');

exports.getCategoryData = async (req, res) => {
    try {
        const cat = await category.find().populate('subcategories');
        console.log(cat);
        res.status(201).json(cat);
    } catch (error) {
        res.status(422).json(error);

    }

}


exports.addcategory = async (req, res) => {

    const { name } = req.body;
    if (!name) {
        res.status(422).json('pls fill the data')
    }

    try {

        const saveCategory = new category({ name });
        await saveCategory.save();
        res.status(201).json(saveCategory);
        console.log(saveCategory);
    }
    catch (error) {
        res.status(422).json(error);
    }
}

const category = require('../models/categorySchema');
const subcategory = require('../models/subcategorySchema');

exports.addSubcategory = async (req, res) => {


    try {
        const cat = await category.findById(req.body.category);
        if (!cat) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const subcat = new subcategory({
            name: req.body.name,
            category: cat._id
        });
        const savedSubcategory = await subcat.save();
        cat.subcategories.push(savedSubcategory._id);
        await cat.save();
        res.json(savedSubcategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }





    // const { name, category_id } = req.body;
    // if (!name || !category_id) {
    //     res.status(422).json('pls fill the data')
    // }

    // try {

    //     const saveSubcategory = new subcategory({ name, category_id });
    //     await saveSubcategory.save();
    //     res.status(201).json(saveSubcategory);
    //     console.log(saveSubcategory);
    // }
    // catch (error) {
    //     res.status(422).json(error);
    // }
}
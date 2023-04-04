


const users = require("../models/userSchema");


exports.adduser = async (req, res) => {

    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        res.status(422).json('pls fill the data')
    }

    try {
        const preuser = await users.findOne({ email: email });
        console.log(preuser);
        if (preuser) {
            res.status(422).json('user already exists')
        } else {
            const saveUser = new users({ name, email, phone, password });
            await saveUser.save();
            res.status(201).json(saveUser);
            console.log(saveUser);
        }
    } catch (error) {
        res.status(422).json(error);
    }
}

exports.getData = async (req, res) => {
    try {
        const userData = await users.find().sort({ _id: -1 });
        res.status(201).json(userData);
    } catch (error) {
        res.status(422).json(error);

    }

}

exports.getById = async (req, res) => {
    try {

        const { id } = req.params;
        const getUserById = await users.findById({ _id: id });
        res.status(201).json(getUserById);

    } catch (error) {
        res.status(422).json(error);
    }
}


exports.updateData = async (req, res) => {
    try {

        const { id } = req.params;
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);

    }


}


exports.deleteData = async (req, res) => {
    try {

        const { id } = req.params;
        const deleteUser = await users.deleteOne({ _id: id });
        res.status(201).json(deleteUser);

    } catch (error) {
        res.status(422).json(error);

    }


}


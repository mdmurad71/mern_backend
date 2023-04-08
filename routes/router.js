
const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

const userController = require("../controller/userController");
const categoryController = require('../controller/categoryController');
const subcategoryController = require('../controller/subcategoryController');

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user
router.post("/register", userController.adduser);
router.get("/getdata", userController.getData);
router.get("/getdatabyid/:id", userController.getById);
router.post("/updateuser/:id", userController.updateData);
router.delete("/deletebyid/:id", userController.deleteData);


// router.post("/register", async (req, res) => {
//     // console.log(req.body);
//     const { name, email, phone, password } = req.body;

//     if (!name || !email || !phone || !password) {
//         res.status(422).json("plz fill the data");
//     }

//     try {

//         const preuser = await users.findOne({ email: email });
//         console.log(preuser);

//         if (preuser) {
//             res.status(422).json("this is user is already present");
//         } else {
//             const adduser = new users({
//                 name, email, phone, password
//             });

//             await adduser.save();
//             res.status(201).json(adduser);
//             console.log(adduser);
//         }

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// get userdata

// router.get("/getdata", async (req, res) => {
//     try {
//         const userdata = await users.find().sort({ _id: -1 });
//         res.status(201).json(userdata)
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

// get individual user

// router.get("/getuser/:id", async (req, res) => {
//     try {
//         console.log(req.params);
//         const { id } = req.params;

//         const userindividual = await users.findById({ _id: id });
//         console.log(userindividual);
//         res.status(201).json(userindividual)

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// update user data

// router.patch("/updateuser/:id", async (req, res) => {
//     try {
//         const { id } = req.params;

//         const updateduser = await users.findByIdAndUpdate(id, req.body, {
//             new: true
//         });

//         console.log(updateduser);
//         res.status(201).json(updateduser);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// delete user
// router.delete("/deleteuser/:id", async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deletuser = await users.findByIdAndDelete({ _id: id })
//         console.log(deletuser);
//         res.status(201).json(deletuser);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })
router.post("/addCategory", categoryController.addcategory);
router.get("/categorydata", categoryController.getCategoryData);

router.post("/addsubcategory", subcategoryController.addSubcategory);


module.exports = router;
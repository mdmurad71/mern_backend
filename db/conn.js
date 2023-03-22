

// const mongoose = require("mongoose");

// const Connection = async () => {

//     const url = 'mongodb://127.0.0.1:27017/test';

//     mongoose.connect(url)
//         .then(() => console.log('Connected!'));
// }

// export default Connection;



const mongoose = require("mongoose");

const DB = 'mongodb://127.0.0.1:27017/test';


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));
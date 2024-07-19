const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODBURI)
.then((res)=>{
}).catch((err)=>{
    console.log(err);
});

module.exports = connection;

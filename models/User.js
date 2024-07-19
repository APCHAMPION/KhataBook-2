const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    passward : {
        type : String,
        reuired : true
    },
    userhisaab : {
        type : Array,
    }
});



module.exports = mongoose.model("user_1",userSchema);
const mongoose = require("mongoose");

const hisaabSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    hisaab : {
        type : String,
        required : true
    },
    encrypt : {
        type : String,
        default : false,
    },
    password : String,

    share : {
        type : String,
        default : false,
    },

    edit : {
        type : String,
        default : false,
    },

    createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("hisab",hisaabSchema);
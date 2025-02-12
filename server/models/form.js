const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({

    name : {
        type : String,
        required:true
    },
    mobile : {
        type : Number,
        required:true

    },
    address : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true
    },
    carname : {
        type : String,
        required:true
    },
    days : {
        type : Date,
        required:true
    }



})

const Form = mongoose.model("Form",formSchema);

module.exports = Form;
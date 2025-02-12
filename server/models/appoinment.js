const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appoinmentSchema = new Schema({

    name : {
        type : String,
        required:true
    },
    special : {
        type : String,
        required:true

    },
    states : {
        type : String,
        required:true
    },
    details : {
        type : String,
        required:true
    }


})

const Appoinment = mongoose.model("Appoinment",appoinmentSchema);

module.exports = Appoinment;
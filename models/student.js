const mongoose = require("mongoose")
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    score: {
        type: Number,
        integer:true,
        required: true
    } 
});


module.exports = mongoose.model("Student", studentSchema)
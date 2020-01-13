const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BorrowSchema=new Schema({
   
    QRid:{
        type: Number,
        required:true
    },
    borrow_user: {
        type: Number,
        required: true
    },
    // borrower:{
    //     type: String,
    //     required: true
    // },
    borrow_start: {
        type: Date,
        required: true
    },
    borrow_end:{
        type: Date,
        require: true
    } 
});


module.exports = Borrow = mongoose.model("borrows", BorrowSchema);
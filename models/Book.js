const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

// const ImageSchema=new Schema({
//   data: Buffer,
//   contentType: String
// });
// const Image=require("models/Image");

// const ImageSchema=new Schema({
//   data: Buffer,
//   contentType: String
// });


const BookSchema = new Schema({
  QRid:{
    type: Number,
    unique: true
    //required?
  },

  image:{
    type: String
  // },
    // required: true
    // type: String,
    // default: "client/src/images/book.png"
  },
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: false
  },
  subject_category: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: "대여 가능"
  },
  current_user:{ //프런트에서?
    type: String,
    required:false
  },
  register_user: {
    type: String,
    required: false
  }, //추가 할 것.
  // borrower: {
  //   type: String,
  //   required: false
  // },
  register_date: {
    type: Date,
    default: Date.now
  },
  fee:{
    type: Number,
    default: 0
  }

});


module.exports = Book = mongoose.model("books", BookSchema);

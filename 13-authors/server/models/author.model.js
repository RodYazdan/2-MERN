const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({

authorName : {
    type: String,
    required:[true," An author name is required"],
    minlength:[3,"An Author name must be at least 3 characters long"]
}
// createdAt and updatedAt is also added

} , {timestamps:true})



const Author =mongoose.model("Author",AuthorSchema);

module.exports =Author;

const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({

petName : {
    type: String,
    required:[true," A pet name is required"],
    minlength:[3,"A pet name must be at least 3 characters long"]
},
petType : {
    type: String,
    required:[true," A pet type is required"],
    minlength:[3,"A pet type must be at least 3 characters long"]
},
petDescription : {
    type: String,
    required:[true," A pet description is required"],
    minlength:[3,"A pet description must be at least 3 characters long"]
},
petSkills : {
    type: "Number",
    required:[true," Number of pet skills is required"],
    max:[3,"Pets can have 0 to 3 skills max "]
}
// createdAt and updatedAt is also added

} , {timestamps:true})



const Pet =mongoose.model("Pet",PetSchema);

module.exports =Pet;
const Pet = require("../models/Pet.model")

module.exports ={

    findAllPets: (req,res) =>{
        Pet.find({}).collation({locale:'en',strength:2}).sort({authorName:1})
            .then((allPets)=>{
                console.log(allPets);
                res.json(allPets)
            })
            .catch((err) => {
                console.log("Find all Pets failed")
                console.log(err);
                res.status(400).json(err);
            })
    },

    findOnePet: (req,res) =>{
        Pet.findOne({_id:req.params.id})
            .then((onePet)=>{
                console.log(onePet);
                res.json(onePet)
            })
            .catch((err) => {
                console.log("Find one Pet failed");
                console.log(err);
                res.status(400).json(err);
            })
        },

    createNewPet: (req,res) =>{
        Pet.create(req.body)
            .then ((newPet)=>{
                console.log(newPet);
                res.json(newPet)
            })
            .catch((err)=>{
                console.log( "Something went wrong in createNewPet");
                console.log(err);
                res.status(400).json(err);
            })
    },

    updatePet: (req,res) =>{
        Pet.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators:true}
        )
            .then ((updatedPet)=>{
                console.log(updatedPet);
                res.json(updatedPet)
            })
            .catch((err)=>{
                console.log( "Something went wrong in updatePet");
                console.log(err);
                res.status(400).json(err);
            })
    },

    deletePet:(req,res) =>{
        Pet.deleteOne({_id: req.params.id})
            .then ((deletedPet)=>{
                console.log(deletedPet);
                res.json(deletedPet)
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
                res.json({message: "Something went wrong is delete Pets", error:err});
            })
    },

}

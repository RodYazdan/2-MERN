const Author = require("../models/Author.model")

module.exports ={

    findAllAuthors: (req,res) =>{
        Author.find({}).collation({locale:'en',strength:2}).sort({authorName:1})
            .then((allAuthors)=>{
                console.log(allAuthors);
                res.json(allAuthors)
            })
            .catch((err) => {
                console.log("Find all Authors failed")
                console.log(err);
                res.status(400).json(err);
            })
    },

    findOneAuthor: (req,res) =>{
        Author.findOne({_id:req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                res.json(oneAuthor)
            })
            .catch((err) => {
                console.log("Find one Author failed");
                console.log(err);
                res.status(400).json(err);
            })
        },

    createNewAuthor: (req,res) =>{
        Author.create(req.body)
            .then ((newAuthor)=>{
                console.log(newAuthor);
                res.json(newAuthor)
            })
            .catch((err)=>{
                console.log( "Something went wrong in createNewAuthor");
                console.log(err);
                res.status(400).json(err);
            })
    },

    updateAuthor: (req,res) =>{
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators:true}
        )
            .then ((updatedAuthor)=>{
                console.log(updatedAuthor);
                res.json(updatedAuthor)
            })
            .catch((err)=>{
                console.log( "Something went wrong in updateAuthor");
                console.log(err);
                res.status(400).json(err);
            })
    },

    deleteAuthor:(req,res) =>{
        Author.deleteOne({_id: req.params.id})
            .then ((deletedAuthor)=>{
                console.log(deletedAuthor);
                res.json(deletedAuthor)
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
                res.json({message: "Something went wrong is delete Authors", error:err});
            })
    },

}

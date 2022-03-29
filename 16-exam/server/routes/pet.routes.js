const PetController = require("../controllers/pet.controller");

module.exports = app => {

    app.post('/api/pets', PetController.createNewPet);
    app.get('/api/pets', PetController.findAllPets);
    app.delete('/api/pets/:id', PetController.deletePet);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.put('/api/pets/:id', PetController.updatePet);
    
}
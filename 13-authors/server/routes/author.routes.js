const AuthorController = require("../controllers/author.controller");

module.exports = app => {

    app.post('/api/authors', AuthorController.createNewAuthor);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    
}
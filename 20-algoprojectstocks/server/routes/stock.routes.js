const StockController = require('../controllers/stock.controller');
module.exports = (app) => {
    app.post('/api/stock', StockController.createStock); 
    app.get('/api/stock', StockController.getAllStock);
    app.get('/api/stock/:id', StockController.getStock);
    app.put('/api/stock/:id', StockController.updateStock);
    app.delete('/api/stock/:id', StockController.deleteStock);
}
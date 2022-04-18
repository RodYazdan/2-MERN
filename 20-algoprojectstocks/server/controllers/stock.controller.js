const Stock = require('../models/stock.model');    /* this is new */


module.exports.createStock = (request, response) => {
    // Mongoose's "create" method is run using our Stock model to add a new stock to our db's stock collection.
    // request.body will contain something like {Symbol: "MSFT", Quantity: 100, etc} from the client
    Stock.create(request.body) //This will use whatever the body of the client's request sends over
        .then(stock => response.json(stock))
        .catch(err => response.json(err));
}

module.exports.getAllStock = (request, response) => {
    Stock.find({})
        .then(stocks => {
            console.log(stocks); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(stocks);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getStock = (request, response) => {
    Stock.findOne({_id:request.params.id})
        .then(stock => response.json(stock))
        .catch(err => response.json(err))
}

module.exports.updateStock = (request, response) => {
    console.log('=====checking updateRoute======')
    console.log(request.params.id)
    console.log(request.body)
    Stock.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then (updatedStock => response.json(updatedStock))
            .catch(err => response.json(err))

}


module.exports.deleteStock = (request, response) => {
    Stock.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
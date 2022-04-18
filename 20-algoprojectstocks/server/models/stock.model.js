const mongoose = require('mongoose');
const StockSchema = new mongoose.Schema({
    stockSymbol: {
        type: String,
        required:[true," A stock symbol is required"],
        minlength:[1,"A stock symbol must be at least 1 characters long"]
    },

    stockQuantity: { 
        type: Number, 
        required:[true," A stock quantity is required"],
        min:[1,"At least 1 share is required"]
    },

    stockPriceBought: {
        
        type: Number,
        required:[true," A stock price bought is required"],
        minlength:[1,"A stock price must be at least 1 characters long"]
    
    },
    // priceCurrent: { type: Number },
    // description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Stock', StockSchema);
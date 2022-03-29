const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());                           /* Allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* Allows JSON Objects with strings and arrays*/
app.use(cors(
    {origin:"http://localhost:3000"}
));

require('./config/mongoose.config');    
require('./routes/pet.routes')(app);   /* "example".routes must follow convention of project name( in this case pets*/


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

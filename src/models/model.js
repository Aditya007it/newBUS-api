const mongoose = require("mongoose");

const schmaa = new mongoose.Schema({
    source:{
        type:String
    },
    destination:{
        type:String
    },
    buses:[
        {number:{type:Number},
        time:{type:String},

    }],
    
})

const Bus = new mongoose.model("Bus",schmaa);

module.exports = Bus;


// password = D8nmTirK65tX45D
//username = eren

    // mongodb+srv://eren:<password>@cluster0.v77o4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
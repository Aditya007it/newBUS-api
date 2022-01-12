const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://eren:D8nmTirK65tX45D@cluster0.v77o4.mongodb.net/busAPI?retryWrites=true&w=majority")
.then(()=>{console.log("connected")}).catch((e)=>{console.log(e)});
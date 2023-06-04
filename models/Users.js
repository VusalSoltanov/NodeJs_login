const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    surname:String,
    addDate:{ type: Date, default: Date.now },
    email:String,
    password:String
})

const User = mongoose.model('user', userSchema);

module.exports = {
    User
}
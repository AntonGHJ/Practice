const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String},    
    email: {type: String},
    message: {type: String}
},
{
    timestamps:true
});

module.exports = model('Message', schema)
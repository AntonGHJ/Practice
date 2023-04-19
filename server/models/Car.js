const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String},    
    engine: {type: String},
    power: {type: String},
    color: {type: String},
    productionYear: {type: String},
    images: [{type: String}],      
    properties: [{type: Schema.Types.ObjectId, ref: 'Property'}],
    mileage: {type: String},
    price: {type: String},  
},
{
    timestamps:true
});

module.exports = model('Car', schema)
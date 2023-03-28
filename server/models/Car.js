const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String},    
    engine: {type: String},
    productionYear: {type: String},
    images: Array,      
    properties: [{type: Schema.Types.ObjectId, ref: 'Property'}],
    mileage: {type: String},
    price: {type: String},  
},
{
    timestamps:true
});

module.exports = model('Car', schema)
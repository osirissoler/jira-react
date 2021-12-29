const {Schema, model} = require ('mongoose')

const testSchema = Schema({
    name:{
        type:String
    }

})

module.exports = model('Test', testSchema);
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
})

mySchema.method('toJSON', function () {
    const { __v, password, ...object } = this.toObject()
    return object
})

const model = mongoose.model('User', mySchema)
module.exports = model
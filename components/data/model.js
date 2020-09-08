const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    document: { type: String, required: true },
    rol: { type: String, required: true },
    state: { type: Boolean, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
})

mySchema.method('toJSON', function () {
    const { __v, password, ...object } = this.toObject()
    return object
})

const model = mongoose.model('Data', mySchema)
module.exports = model
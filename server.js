const express = require('express');
const cors = require('cors');
const router = require('./network/routes')
const db = require('./db')

db(`mongodb+srv://camiloAdmin:madrid321431462@olsoftware.rszgv.mongodb.net/test`)

let app = express();

app.use(cors());

app.use(express.json())

router(app)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT || 3000}`);
})
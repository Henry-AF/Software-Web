const { truncate } = require("fs")
const mongoose = require('mongoose')
const catSchema = new mongoose.catSchema({
    nomeGato: {
        type: String,
        required: true
    },
    idadeGato: {
        type: String,
        required: true
    },
    sexoGato: {
        type: String,
        required: true
    },
    nomeDono: {
        type: String,
        required: true
    }, 
    emailDono: {
        type: String,
        required: true
    },
    telefoneDono: {
        type: String,
        required: true
    },
    enderecoDono: {
        type: String,
        required: true
    },
    estadoDono: {
        type: String,
        required: true
    },
    cidadeDono: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("GatoDono", catSchema);
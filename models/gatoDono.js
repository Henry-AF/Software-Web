import mongoose from 'mongoose';
import { type } from 'os';

const catSchema = new mongoose.Schema({
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
    },
    imagem: {
        type: String,
        required: false
    },
    arquivoFASTA: {
        type: String,
        required: false
    }
});

export default mongoose.model("GatoDono", catSchema);

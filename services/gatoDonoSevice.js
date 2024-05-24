import mongoose from "mongoose";
import catSchema from "../models/gatoDono"

const CatSchema = mongoose.model("CatSchema", catSchema)

class CatDonoService {

    Create(nomeGato, idadeGato, sexoGato, nomeDono, estadoDono, cidadeDono, emailDono, telefoneDono, enderecoDono) {
        const novoGatoDono = new CatSchema ({
            nomeGato: nomeGato,
            idadeGato: idadeGato,
            sexoGato: sexoGato,
            nomeDono: nomeDono,
            estadoDono: estadoDono,
            cidadeDono: cidadeDono,
            emailDono: emailDono,
            telefoneDono: telefoneDono,
            enderecoDono: enderecoDono
        })
        novoGatoDono.save()
    }

}

export default new CatDonoService()
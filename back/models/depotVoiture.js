const mongoose = require('mongoose');

const depotVoitureSchema= mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        idClient: String,
        numVoiture: String,
        dateDepotVoit: Date,
        dateRecupVoit:Date,
        etatReception:Number,
        etatRecuperation:Number,
        etatTTlPaieemnt:Number,
        montantTTlPaiement:Number,
        montantTotalPaye:Number,
        nbreReparationAFaire:Number,
        nbreReparationFini:Number,
        bonDeSortie:Number
    }
);

//Product= le anarana iantsoana anle model refa ampiasa anazy ao amle projet
module.exports = mongoose.model('DepotVoiture',depotVoitureSchema);


const mongoose = require('mongoose');

const AnnonceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    titre: { type: String, required: true },
    description: String,
    prix: { type: Number, required: true },
    type: { type: String, enum: ['vente', 'location'], required: true },
    marque: String,
    modele: String,
    annee: Number,
    kilometrage: Number,
    etat: String,
    images: [String], // noms de fichiers images
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Annonce', AnnonceSchema);

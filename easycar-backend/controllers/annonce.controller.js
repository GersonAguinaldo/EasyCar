const Annonce = require('../models/annonce.model');
const fs = require('fs');

// ✅ Créer une annonce
exports.createAnnonce = async (req, res) => {
    try {
        const imagePaths = req.files?.map(file => file.filename) || [];
        const annonce = await Annonce.create({ ...req.body, user: req.user.id, images: imagePaths });
        res.status(201).json(annonce);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la création", error: err });
    }
};

// 🔄 Modifier une annonce
exports.updateAnnonce = async (req, res) => {
    try {
        const annonce = await Annonce.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(annonce);
    } catch (err) {
        res.status(400).json({ message: "Erreur de mise à jour", error: err });
    }
};

// ❌ Supprimer une annonce
exports.deleteAnnonce = async (req, res) => {
    try {
        const annonce = await Annonce.findByIdAndDelete(req.params.id);
        res.json({ message: "Annonce supprimée", annonce });
    } catch (err) {
        res.status(400).json({ message: "Erreur de suppression", error: err });
    }
};

// 📋 Liste des annonces
exports.getAllAnnonces = async (req, res) => {
    const annonces = await Annonce.find().populate('user', 'name email');
    res.json(annonces);
};

// 🔍 Détail d’une annonce
exports.getAnnonceById = async (req, res) => {
    const annonce = await Annonce.findById(req.params.id).populate('user', 'name email');
    res.json(annonce);
};

// 👤 Mes annonces
exports.getMyAnnonces = async (req, res) => {
    const annonces = await Annonce.find({ user: req.user.id });
    res.json(annonces);
};

const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hash });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de l’inscription', error: err });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ message: 'Identifiants invalides' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err });
    }
};

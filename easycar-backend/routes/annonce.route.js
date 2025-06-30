const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createAnnonce, updateAnnonce, deleteAnnonce, getAllAnnonces, getAnnonceById, getMyAnnonces } = require('../controllers/annonce.controller');
const { verifyToken } = require('../middleware/auth.middleware');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', getAllAnnonces);
router.get('/me', verifyToken, getMyAnnonces);
router.get('/:id', getAnnonceById);
router.post('/', verifyToken, upload.array('images', 5, ), createAnnonce);
router.put('/:id', verifyToken, updateAnnonce);
router.delete('/:id', verifyToken, deleteAnnonce);

module.exports = router;

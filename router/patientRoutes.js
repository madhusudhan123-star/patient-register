const express = require('express');
const router = express.Router();
const patientController = require('../controller/patientController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // This will save uploaded files in an 'uploads' folder

router.get('/patients', patientController.getAllPatients);
router.post('/patients', upload.single('photo'), patientController.addPatient);
router.put('/patients/:id', upload.single('photo'), patientController.updatePatient);
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;

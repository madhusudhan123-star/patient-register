const Patient = require('../module/Patient');

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patients', error: error.message });
    }
};

// exports.addPatient = async (req, res) => {
//     try {
//         const patientData = {
//             ...req.body,
//             photo: req.file ? req.file.path : null  // Save file path if uploaded
//         };
//         const newPatient = new Patient(patientData);
//         const savedPatient = await newPatient.save();
//         res.status(201).json(savedPatient);
//     } catch (error) {
//         res.status(400).json({ message: 'Error adding patient', error: error.message });
//     }
// };
exports.addPatient = async (req, res) => {
    console.log('Request body:', req.body);  // Add this line to inspect the request payload
    try {
        const newPatient = new Patient(req.body);
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error adding patient', error: error.message });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const updatedData = {
            ...req.body,
            photo: req.file ? req.file.path : req.body.photo  // Update file if new file is uploaded
        };
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error updating patient', error: error.message });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting patient', error: error.message });
    }
};
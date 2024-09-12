const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    emergencyPhone: { type: String, required: true },
    insuranceProvider: { type: String, required: true },
    paymentType: { type: String, enum: ['Online', 'Cash'], required: true },
    paymentAmount: { type: Number, required: true },
    photo: { type: String }
});

module.exports = mongoose.model('Patient', patientSchema);

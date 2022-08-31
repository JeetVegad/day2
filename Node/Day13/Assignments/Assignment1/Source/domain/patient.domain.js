const Patient = require('../schema/patient.schema');
class PatientDomain {
  static async addPatient(req, res, next) {
    try {
      const patient = await Patient.create(req.body);
      res
        .status(200)
        .json({ message: 'patient added successfully', data: patient });
    } catch (error) {
      next(error);
    }
  }
  static async getPatients(_req, res, next) {
    try {
      const patient = await Patient.find()
        .populate('doctors', 'name')
        .populate('department', 'name');
      res.status(200).json({ message: 'success', data: patient });
    } catch (error) {
      next(error);
    }
  }
  static async getDrugsList(req, res, next) {
    try {
      const patient = await Patient.find(
        { _id: req.params.id },
        { _id: 0 }
      ).select('drugs');
      res.status(200).json({ message: 'success', data: patient });
    } catch (error) {
      next(error);
    }
  }
  static async getPatientSummary(req, res, next) {
    try {
      const patient = await Patient.findById(req.params.id)
        .populate('department')
        .populate('doctors');
      let array = [];
      const getDrugs = () => {
        Object.keys(patient.drugs).forEach((data) => {
          array = [...array, ...patient.drugs[data]];
        });
        return array;
      };
      const summary = {
        name: patient.name,
        department: patient.department.name,
        totalDoctorsAssigned: patient.doctors.length,
        doctorsName: patient.doctors.map((data) => data.name),
        totalDrugsList: getDrugs(),
      };
      res.status(200).json({ message: 'success', data: summary });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PatientDomain;

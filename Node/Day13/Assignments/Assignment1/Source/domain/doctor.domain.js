const Doctor = require('../schema/doctor.schema');
const Department = require('../schema/department.schema');
const Patient = require('../schema/patient.schema');
const validate = require('../validations');
class DoctorDomain {
  static async addDepartment(req, res, next) {
    try {
      const department = await Department.create(req.body);
      res.status(200).json({ message: 'success', department });
    } catch (error) {
      next(error);
    }
  }
  static async getDoctors(_req, res, next) {
    try {
      const doctors = await Doctor.find().populate('patients', 'name');
      res.status(200).json({ message: 'success', data: doctors });
    } catch (error) {
      next(error);
    }
  }
  static async addDoctor(req, res, next) {
    try {
      const { error } = validate.validateDoctor(req.body);
      if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
      }
      const doctor = await Doctor.create(req.body);
      res.status(200).json({ message: 'successfully inserted', doctor });
    } catch (error) {
      next(error);
    }
  }
  static async updateDoctor(req, res, next) {
    try {
      const { error } = validate.validateDoctor(req.body);
      if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
      }
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        res.status(404).json({ message: 'no resource found' });
        return;
      }
      const result = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({ message: 'success', result });
    } catch (error) {
      next(error);
    }
  }
  static async deleteDoctor(req, res, next) {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        res.status(404).json({ message: 'no resource found' });
        return;
      }
      const result = await Doctor.findByIdAndRemove(req.params.id);
      const patient = await Patient.findOneAndUpdate(
        { doctors: { $in: [req.params.id] } },
        { $pull: { doctors: req.params.id } }
      );
      console.log(patient);
      res.status(200).json({ message: 'success', result });
    } catch (error) {
      next(error);
    }
  }
  static async getPatientReport(req, res, next) {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        res.status(404).json({ message: 'no resource found' });
        return;
      }
      const result = await Doctor.find({ _id: req.params.id })
        .populate('patients')
        .select('patients');
      res.status(200).json({ message: 'success', result });
    } catch (error) {
      next(error);
    }
  }
  static async getDoctorSummary(req, res, next) {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        res.status(404).json({ message: 'no resource found' });
        return;
      }
      const result = await Doctor.findById(req.params.id).populate(
        'department'
      );
      const summary = {
        name: result.name,
        department: result.department.name,
        patientCount: result.patients.length,
      };
      res.status(200).json({ message: 'success', data: summary });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = DoctorDomain;

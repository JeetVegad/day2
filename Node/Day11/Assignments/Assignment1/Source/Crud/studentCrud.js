const Student = require('../Models/studentModel');
class StudentDomain {
  static async getStudents(_req, res, next) {
    try {
      const students = await Student.find();
      res.status(200).json({ message: 'success', students });
    } catch (error) {
      next(error);
    }
  }
  static async getStudentById(req, res, next) {
    try {
      const student = await Student.find({ id: parseInt(req.params.stdId) });
      res.status(200).json({ message: 'success', student });
    } catch (error) {
      next(error);
    }
  }
  static async updateAnStudent(req, res, next) {
    try {
      const student = await Student.findById(req.params.stdId);
      Object.keys(req.body).forEach((data) => {
        student[data] = req.body[data];
      });
      await student.save();
      res.status(200).json({ message: 'success', student });
    } catch (error) {
      next(error);
    }
  }
  static async getFees(req, res, next) {
    try {
      const fees = await Student.find(
        { id: parseInt(req.params.stdId) },
        { _id: 0, Fees: 1 }
      );
      res.status(200).json({ message: 'success', fees });
    } catch (error) {
      next(error);
    }
  }
  static async updateFees(req, res, next) {
    try {
      const student = await Student.findById(req.params.stdId);
      Object.keys(req.body).forEach((data) => {
        student.Fees[data] = req.body[data];
      });
      await student.save();
      res.status(200).json({ message: 'success', student });
    } catch (error) {
      next(error);
    }
  }
  static async createStudents(req, res, next) {
    try {
      const student = new Student(req.body);
      const result = await student.save();
      res
        .status(200)
        .json({ message: 'successfully inserted ', student: result });
    } catch (error) {
      next(error);
    }
  }
  static async deleteStudent(req, res, next) {
    try {
      const student = await Student.findOneAndDelete({
        id: parseInt(req.params.stdId),
      });
      res.status(200).json({ message: 'successfully deleted ', student });
    } catch (error) {
      next(error);
    }
  }
  static async getResult(req, res, next) {
    try {
      const result = await Student.find({
        id: parseInt(req.params.stdId),
      }).select('Result');
      res.status(200).json({ message: 'success ', result });
    } catch (error) {
      next(error);
    }
  }
  static async updateResult(req, res, next) {
    try {
      const temp = await Student.find(
        { id: parseInt(req.params.stdId) },
        { _id: 0, Result: 1 }
      );
      const updatedResult = { ...temp[0].Result, ...req.body };
      const result = await Student.findOneAndUpdate(
        { id: parseInt(req.params.stdId) },
        { Result: updatedResult },
        { new: true, upsert: true }
      );
      res.status(200).json({ message: 'success', result });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = StudentDomain;

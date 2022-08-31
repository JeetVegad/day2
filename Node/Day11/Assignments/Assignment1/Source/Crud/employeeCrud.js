const Employee = require('../Models/employeeModel');
class EmployeeDomain {
  static async getEmployees(_req, res, next) {
    try {
      const employees = await Employee.find();
      res.status(200).json({ message: 'success', employees });
    } catch (err) {
      next(err);
    }
  }
  static async createEmployee(req, res, next) {
    try {
      const employee = new Employee(req.body);
      const result = await employee.save();
      res.status(200).json({ message: 'successfully inserted', result });
    } catch (err) {
      next(err);
    }
  }
  static async getEmployeeById(req, res, next) {
    try {
      const employee = await Employee.find({
        empId: parseInt(req.params.empId),
      });
      res.status(200).json({ message: 'success', employee });
    } catch (err) {
      next(err);
    }
  }
  static async updateAnEmployee(req, res, next) {
    try {
      const employee = await Employee.findOneAndUpdate(
        { empId: parseInt(req.params.empId) },
        req.body,
        { upsert: true, new: true }
      );
      res.status(200).json({ message: 'success', employee });
    } catch (err) {
      next(err);
    }
  }
  static async getAssignments(req, res, next) {
    try {
      const employee = await Employee.find({
        empId: parseInt(req.params.empId),
      });
      res
        .status(200)
        .json({ message: 'success', assignments: employee[0].assignments });
    } catch (err) {
      next(err);
    }
  }
  static async getAssignmentById(req, res, next) {
    try {
      const employee = await Employee.find({
        empId: parseInt(req.params.empId),
      });
      const assignment = employee[0].assignments.filter(
        (data) => data.assignmentId === parseInt(req.params.id)
      );
      res.status(200).json({ message: 'success', assignment });
    } catch (err) {
      next(err);
    }
  }
  static async updateAssignment(req, res, next) {
    try {
      const assignment = await Employee.findOneAndUpdate(
        {
          empId: parseInt(req.params.empId),
          'assignments.assignmentId': req.params.id,
        },
        {
          $set: {
            'assignments.$': {
              ...req.body,
              assignmentId: parseInt(req.params.id),
            },
          },
        },
        { new: true }
      );
      res.status(200).json({ message: 'success', assignment });
    } catch (err) {
      next(err);
    }
  }
  static async addAssignment(req, res, next) {
    try {
      const assignment = await Employee.findOneAndUpdate(
        { empId: parseInt(req.params.empId) },
        { $push: { assignments: req.body } },
        { new: true, upsert: true }
      );
      res.status(200).json({ message: 'success', assignment });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = EmployeeDomain;

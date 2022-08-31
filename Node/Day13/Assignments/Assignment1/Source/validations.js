const Joi = require('joi');
const drugsSchema = Joi.object({
  morning: Joi.array().items(Joi.string()),
  afternoon: Joi.array().items(Joi.string()),
  night: Joi.array().items(Joi.string()),
});
const validatePatient = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    doctors: Joi.array().items(Joi.string()),
    department: Joi.string(),
    drugs: drugsSchema,
  });
  return schema.validate(body);
};
const validateDoctor = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    patients: Joi.array().items(Joi.string()),
    department: Joi.string(),
  });
  return schema.validate(body);
};
module.exports = {
  validatePatient,
  validateDoctor,
};

import Joi from 'joi';
import { FIELDS } from '../../content-strings';

const { EMAIL, SUBJECT, MESSAGE } = FIELDS;

export const EMAIL_SCHEMA = Joi.string()
  .email({ tlds: { allow: false } })
  .messages({
    'string.email': EMAIL.ERRORS.DEFAULT,
    'string.empty': EMAIL.ERRORS.IS_EMPTY,
    'any.required': EMAIL.ERRORS.IS_REQUIRED
  })
  .required();

export const SUBJECT_SCHEMA = Joi.string()
  .min(5)
  .max(30)
  .messages({
    'string.base': SUBJECT.ERRORS.DEFAULT,
    'string.empty': SUBJECT.ERRORS.DEFAULT,
    'string.min': SUBJECT.ERRORS.IS_BELOW_MINIMUM,
    'string.max': SUBJECT.ERRORS.IS_ABOVE_MAXIMUM,
    'any.required': SUBJECT.ERRORS.DEFAULT
  })
  .required();

export const MESSAGE_SCHEMA = Joi.string()
  .min(10)
  .max(200)
  .messages({
    'string.base': MESSAGE.ERRORS.DEFAULT,
    'string.empty': MESSAGE.ERRORS.DEFAULT,
    'string.min': MESSAGE.ERRORS.IS_BELOW_MINIMUM,
    'string.max': MESSAGE.ERRORS.IS_ABOVE_MAXIMUM,
    'any.required': MESSAGE.ERRORS.DEFAULT
  })
  .required();

const SCHEMA = Joi.object({
  email: EMAIL_SCHEMA,
  subject: SUBJECT_SCHEMA,
  message: MESSAGE_SCHEMA
});

export default SCHEMA;

import Joi from 'joi';
import { FIELDS } from '../../content-strings';

const { NAME, EMAIL, MESSAGE } = FIELDS;

export const NAME_SCHEMA = Joi.string()
  .min(1)
  .messages({
    'string.base': NAME.ERRORS.DEFAULT,
    'string.empty': NAME.ERRORS.DEFAULT,
    'string.min': NAME.ERRORS.DEFAULT,
    'any.required': NAME.ERRORS.DEFAULT
  })
  .required();

export const EMAIL_SCHEMA = Joi.string()
  .email({ tlds: { allow: false } })
  .messages({
    'string.email': EMAIL.ERRORS.DEFAULT,
    'string.empty': EMAIL.ERRORS.IS_EMPTY,
    'any.required': EMAIL.ERRORS.IS_REQUIRED
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
  name: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  message: MESSAGE_SCHEMA
});

export default SCHEMA;

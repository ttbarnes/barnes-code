import Joi from 'joi';
import SCHEMA, { EMAIL_SCHEMA, NAME_SCHEMA, MESSAGE_SCHEMA } from '.';
import { FIELDS } from '../../content-strings';

const { NAME, EMAIL, MESSAGE } = FIELDS; 

describe('form-validation/contact', () => {
  describe('NAME_SCHEMA', () => {
    it('should return a Joi schema', () => {
      const expected = Joi.string()
        .min(1)
        .messages({
          'string.base': NAME.ERRORS.DEFAULT,
          'string.empty': NAME.ERRORS.DEFAULT,
          'string.min': NAME.ERRORS.DEFAULT,
          'any.required': NAME.ERRORS.DEFAULT
        })
        .required();

      expect(NAME_SCHEMA).toEqual(expected);
    });
  });

  describe('EMAIL_SCHEMA', () => {
    it('should return a Joi schema', () => {
      const expected = Joi.string()
        .email({ tlds: { allow: false } })
        .messages({
          'string.email': EMAIL.ERRORS.DEFAULT,
          'string.empty': EMAIL.ERRORS.IS_EMPTY,
          'any.required': EMAIL.ERRORS.IS_REQUIRED
        })
        .required();

      expect(EMAIL_SCHEMA).toEqual(expected);
    });
  });

  describe('MESSAGE_SCHEMA', () => {
    it('should return a Joi schema', () => {
      const expected = Joi.string()
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

      expect(MESSAGE_SCHEMA).toEqual(expected);
    });
  });
  
  describe('SCHEMA', () => {
    it('should return a Joi schema for all fields', () => {
      const expected = Joi.object({
        name: NAME_SCHEMA,
        email: EMAIL_SCHEMA,
        message: MESSAGE_SCHEMA
      });

      /** 
       * Need to stringify the result and assertion here,
       * otherwise jest throws a ruleset comparision error
       */
      expect(JSON.stringify(SCHEMA)).toEqual(JSON.stringify(expected));
    });
  });
});

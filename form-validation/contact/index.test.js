import Joi from 'joi';
import SCHEMA, { EMAIL_SCHEMA, SUBJECT_SCHEMA, MESSAGE_SCHEMA } from '.';
import { FIELDS } from '../../content-strings';

const { EMAIL, SUBJECT, MESSAGE } = FIELDS; 

describe('form-validation/contact', () => {
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

  describe('SUBJECT_SCHEMA', () => {
    it('should return a Joi schema', () => {
      const expected = Joi.string()
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

      expect(SUBJECT_SCHEMA).toEqual(expected);
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
        email: EMAIL_SCHEMA,
        subject: SUBJECT_SCHEMA,
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

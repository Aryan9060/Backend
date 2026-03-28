import Joi from "joi";

class BaseDto {
  static schema = Joi.object();

  static validate(data) {
    const { error, value } = this.validate(data, {
      abortEarly: false,
      // allowUnknown: true,
      stripUnknown: true,
    });

    if (error) {
      const error = error.details.map((d) => d.message);
      return { error: null, value };
    }
  }
}


export default BaseDto;
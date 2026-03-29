import joi from "joi";

class BaseDTO {
  static schima = joi.object();

  static validate(data) {
    const { error, value } = this.schima.validate(data, {
      abortEarly: false,
      stripUnknown: true, //remove unknown keys
    });

    if (error) {
      const error = error.details.map((d) => d.message);
      return { error, value };
    }
    return { error: null, value };
  }
}

export default BaseDTO;

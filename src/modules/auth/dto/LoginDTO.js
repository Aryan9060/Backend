import joi from "joi";

class LoginDTO extends BaseDTO {
  static schima = {
    email: joi.string().email().required(),
    password: joi.string().required().min(8).max(64),
  };
}

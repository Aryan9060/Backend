const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 50,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 8,
      select: false,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    varificationToken: {
      type: String,
      select: false,
      default: "",
    },
    forgotPasswordToken: {
      type: String,
      select: false,
      default: "",
    },
    resetPasswordToken: {
      type: String,
      select: false,
      default: "",
    },
    resetPasswordExpires: {
      type: Date,
      select: false,
      default: Date.now,
    },
  },
  {
    timeseries: true,
  },
);

export default model("User", userSchema);

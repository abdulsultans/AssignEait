const mongoose = require("mongoose");

const bloggerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    blogurl: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Trainee = mongoose.model("Blogger", bloggerSchema);
module.exports = Trainee;

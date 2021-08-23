const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author Name Is Required"],
      minLength: [3, "Author Name Must Be At Least 3 Characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);

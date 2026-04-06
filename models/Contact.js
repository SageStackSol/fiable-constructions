import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    service: {
      type: String,
      enum: [
        "Architectural Design",
        "Construction Consultation",
        "Construction Execution",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
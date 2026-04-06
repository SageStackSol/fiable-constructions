import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String, // URL
    video: String, // URL
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
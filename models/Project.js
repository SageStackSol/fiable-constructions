import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    image: String,
    imagePublicId: String,

    gallery: [String],
    galleryPublicIds: [String],

    video: String,
    videoPublicId: String,

    clientLogo: String,
    clientLogoPublicId: String,

    pinned: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);

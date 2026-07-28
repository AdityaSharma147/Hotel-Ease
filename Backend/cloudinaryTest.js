import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Quick check: log config
console.log("Cloudinary config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing",
});

// Upload a sample image
(async () => {
  try {
    const result = await cloudinary.uploader.upload("sample.jpg", {
      folder: "test_uploads",
    });
    console.log("Upload success:", result.secure_url);
  } catch (err) {
    console.error("Upload failed:", err.message);
  }
})();

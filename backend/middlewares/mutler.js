import multer from "multer";

const storage = multer.memoryStorage();





export const singleUpload = multer({ storage }).single("file");

// Debugging Middleware
export const debugMulter = (req, res, next) => {
    console.log("📂 Multer file received:", req.file);
    console.log("📝 Multer body received:", req.body);
    next();
};

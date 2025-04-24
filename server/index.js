const express = require("express");
const cors = require("cors");
const admin = require("./firebaseAdmin");
const dotenv = require("dotenv");

dotenv.config();

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));

app.post("/auth", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.json({ message: "Authentication successful", userId: decodedToken.uid, email: decodedToken.email });
    } catch (error) {
        res.status(403).json({ message: "Invalid token", error });
    }
});

app.post("/register", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const { email } = req.body;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);

        console.log("New User Registered:", email);

        res.json({ message: "Registration successful", userId: decodedToken.uid, email });
    } catch (error) {
        res.status(403).json({ message: "Invalid token", error });
    }
});

app.listen(PORT, (err) => {
    if (err) {
        const message = err?.message ?? "Unknown server error";
        logger.error(message);
        res.status(500).json({ message });
    }
    console.log(`Server listening on PORT: ${PORT}`);
});

const express = require("express");
const cors = require("cors");

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, (err) => {
    if (err) {
        const message = err?.message ?? "Unknown server error";
        logger.error(message);
        res.status(500).json({ message });
    }
    console.log(`Server listening on PORT: ${PORT}`);
});

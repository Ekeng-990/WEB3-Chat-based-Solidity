const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messagesCache = []; // Simpan sementara di RAM

app.get("/messages", (req, res) => {
    res.json(messagesCache);
});

app.post("/messages", (req, res) => {
    const { sender, text, timestamp } = req.body;
    messagesCache.push({ sender, text, timestamp });
    res.status(201).json({ message: "Message cached" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

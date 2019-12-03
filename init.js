import dotenv from "dotenv";
import "./db";

// Mongoose Models
import "./models/Video";
import "./models/Comment";
import "./models/User";

import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`😎 Listening on port ${PORT}!!`);

app.listen(PORT, handleListening);

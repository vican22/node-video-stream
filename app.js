const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

const videoRoutes = require("./routes/index");

app.use(videoRoutes);

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));

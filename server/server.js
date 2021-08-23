const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8000;

require("./config/mongoose.config");
require("./routes/author.route");
app.use(express.json(), express.urlencoded({ extended: true }));

const allAuthorRoutes = require("./routes/author.route");
allAuthorRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

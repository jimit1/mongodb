const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const apiRoutes = require("./routes/test-routes.js");
// const notesRoutes = require("./routes/mongo-routes.js");
const shoeRoutes = require("./routes/shoe-routes");

app.use(shoeRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));

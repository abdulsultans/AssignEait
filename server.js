const express = require("express");

const morgan = require("morgan");

const dotenv = require("dotenv");

const connectDB = require("./config/connectDB");

const bloggersRoute = require("./routes/bloggersRoute");

const usersRoute = require("./routes/usersRoute");

dotenv.config();
const cors = require("cors");

const app = express();

//CONNECTION
connectDB();

//MIDDLEWARES
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

//ROUTES

app.use("/api/v6/bloggers", bloggersRoute);
app.use("/api/v6/users", usersRoute);

//HOME ROUTE

app.get("/", (req, res) => {
  res.send("<h2> This is the first ever bloggers api</h2>");
});

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`server is live on ${port}`));

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { connectDB } = require("./utils/features");
const { config } = require("dotenv");

const { errorMiddleware } = require("./middleware/error");

// const userRouter = require("./routes/user");
const registerRouter = require("./routes/registerRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const corsOptions = {
  origin: "http://localhost:5173", // replace with your client's origin
  credentials: true, // this allows the cookie to be sent with the request
};

app.use(cors(corsOptions));

config({
  path: "./.env",
});

connectDB();
const port = process.env.PORT || 5000;

app.use("/api/v1/register", registerRouter);
app.use("/api/v1/users", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});



app.use(errorMiddleware);

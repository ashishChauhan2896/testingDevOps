import express, { json, urlencoded } from "express";
import createErr from "http-errors";
import userRoute from "./routes/user.js";
import adminRoute from "./routes/admin.js";

// EsLint error in adminRoute  
// const adminRoute1 =  require('./routes/admin.js');

const app = express();
const port = 9092;

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/v1/user/", userRoute);
app.use("/v1/admin/", adminRoute);

// Testing route
app.use("/", (req, res, next) => {
  next(createErr.NotFound());
});

// Error Handler
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    msg: err.message,
  });
});

app.listen(port, () => {
  console.log("Server is runing on port", port);
});

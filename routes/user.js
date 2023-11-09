import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: "Route say hello to all users" });
});

export default router;

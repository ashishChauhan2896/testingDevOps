import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: "Route say hello to admin" });
});

export default router;

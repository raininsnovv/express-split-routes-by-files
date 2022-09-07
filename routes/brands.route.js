const { Router } = require("express");

const router = Router();

router.get("/brands", (req, res) => {
  res.json("Get brands");
});
router.post("/brands", (req, res) => {
  res.json("Post brands");
});
router.delete("/brands", (req, res) => {
  res.json("Delete brands");
});

module.exports = router;

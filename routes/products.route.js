const { Router } = require("express");
const router = Router();

router.get("/products", (req, res) => {
  res.json("Get products");
});

router.get("/products/:id", (req, res) => {
  res.json("Get products :id");
});
router.post("/products", (req, res) => {
  res.json("Post products");
});
router.delete("/products/:id", (req, res) => {
  res.json("Delete products id");
});

module.exports = router;

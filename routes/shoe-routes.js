const router = require("express").Router();
const { test } = require("../controllers/shoe-controller");

router.get("/test", test);

module.exports = router;

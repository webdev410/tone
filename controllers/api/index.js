const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dishRoutes = require("./dish-routes");
const handbookRouter = require("./handbookRoutes");
const songRouter = require("./songRoutes-tutor");

// api/users
router.use("/users", userRoutes);
// api/dish
router.use("/dish", dishRoutes);
// api/handbook
router.use("/handbook", handbookRouter);
// api/song
router.use("/songs", songRouter);

module.exports = router;

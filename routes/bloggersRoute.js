const express = require("express");

const {
  createBlogger,
  getAllBloggers,
  getSingleBlogger,
  updateBlogger,
  deleteBlogger,
} = require("../controllers/bloggersController");

const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createBlogger).get(getAllBloggers);
router
  .route("/:_id")
  .get(protect, getSingleBlogger)
  .put(protect, updateBlogger)
  .delete(protect, deleteBlogger);

module.exports = router;

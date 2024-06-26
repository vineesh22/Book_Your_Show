const express = require("express");
const {
  fetchMovies,
  fetchMovieData,
  addMovie,
  updateMovie,
  deleteMovie,
  fetchreviews,
  fetchuserreviews,
  fetchuserbookings,
  addreview,
} = require("../controllers/movieControllers");

const router = express.Router();

router
  .route("/")
  .get(fetchMovies)
  .post(addMovie)
  .put(updateMovie)
  .delete(deleteMovie);
router.route("/:movieId").get(fetchMovieData);
router.route("/:movieId/reviews").get(fetchreviews);
router.route("/:userId/userreviews").get(fetchuserreviews);
router.route("/:userId/userbookings").get(fetchuserbookings);
router.route("/review").post(addreview);
module.exports = router;

const router = require('express').Router();
const {
  getMovie,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');
const { errCreateMovie } = require('../middlewares/error-celebrate');

router.get('/', getMovie);
router.post('/', errCreateMovie, createMovie);
router.delete('/:movieId', deleteMovie);

module.exports = router;

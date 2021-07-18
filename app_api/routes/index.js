var express = require('express');
var router = express.Router();
var ctrlReviews = require('../controllers/reviews');

/* Get pages */
router.get('/reviews', ctrlReviews.reviewsList);
//router.get('');


/* Post reviews */
router.post('/reviews/new', ctrlReviews.addReview);

module.exports = router;

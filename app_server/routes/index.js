var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* Get pages */
router.get('/', ctrlMain.homepage); // Homepage
router.get('/guestbook', ctrlMain.guestbook); // Guest book page
router.get('/services', ctrlMain.services); // Services page
router.get('/about', ctrlMain.about); // location/ hours page
router.get('/guestbook/add_review', ctrlMain.addReview); // Add Review page

/* POST to guestbook page */
router.post('/guestbook/add_review', ctrlMain.doAddReview);



module.exports = router;

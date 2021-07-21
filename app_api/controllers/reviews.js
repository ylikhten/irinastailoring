var mongoose = require('mongoose');
var Review = mongoose.model('Review');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content)
};


module.exports.reviewsList = function(req, res) {
  var reviews = [];
  Review.find({}, function(err, allReviews) {
    if(err){
      sendJsonResponse(res, 404, err);
    } else {
      allReviews.forEach(
        function(rev) {
          if(rev.date != null) {
            var temp = {};
            temp.name = rev.name;
            temp.date = rev.date.toDateString();
            temp.review = rev.review;
            reviews.push(temp);

            console.log(temp.date);
          }
        }
      );
      sendJsonResponse(res, 200, reviews);
    }
  
  });

};

module.exports.addReview = function(req, res) {
  Review.create({
    name: req.body.name,
    email: req.body.email,
    review: req.body.review
    }, function(err, reviews) {
      if(err){
        sendJsonResponse(res, 400, err);
      } else {
        sendJsonResponse(res, 201, reviews);
      };
  });
};

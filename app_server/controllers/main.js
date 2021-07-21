const{check} = require('express-validator');
var axios = require('axios');

var apiOptions = {
  server : 'http://localhost:3000'
};

/*** Homepage methods ***/

/* GET homepage helper function */
var renderHomepage = function (req, res){
  res.render('mainpage', {
    title: 'Irina\'s Tailoring',
    pageHeader: {
      title: 'Irina\'s Tailoring',
      strapline: 'Small, family owned business looking to offer the best alteration services in town and around.'
    }
  });
}

/* GET homepage */
module.exports.homepage = function (req, res) {
  renderHomepage(req, res);
};

/*** Services page methods ***/

/* GET services pages  */
module.exports.services = function (req, res) {
  res.render('index', {title: 'Our Services'});
};

/*** Guestbook page methods ***/

/* GET guestbook helper method */
var renderGuestbook = function(req, res){
  res.render('guestbook', {
    title: 'Guestbook',
    pageHeader: {
      title: 'Guestbook and Reviews',
      strapline: 'Hi leave nice review pls'
    },
    //reviews: body // maybe add error trapping when loading reviews page
  });

};

/* GET guestbook page  */
module.exports.guestbook = function (req, res) {
  renderGuestbook(req, res);
  /*path = '/api/reviews';
  axios.get(apiOptions.server + path).then(function(response){
    console.log(response.data);
    renderGuestbook(req, res, response.data); 
  });*/
 
};


/*** Add Review page methods ***/

/* Get add review helper method */
var renderReviewsForm = function(req, res) {
  res.render('add_review', {
   title: 'New Review',
   pageHeader: 'Add a new review for Irina\'s Tailoring', 
   error: req.query.err,
   url: req.originalUrl 
  });
};

/* Get add review page */
module.exports.addReview = function(req, res){
  renderReviewsForm(req, res);
};

var _showError = function(req, res, status){
  var message, error, content;
  if(status === 404){
    message = '404, page not found';
    content = 'Cannot find requested page';
    error = '404';
  } else{
    message = status + ", something's gone wrong";
    content = "Something went wrong";
    error = "other";
  }
  res.status(status);
  res.render('error', {
    title: 'Error',
    message: message,
    error: error,
    content: content
  });

};

/* Post review to guestbook */
module.exports.doAddReview = function(req, res) {
  var requrestOptions, path, postdata;
  path = '/api/reviews/new';
  postdata = {
    name: req.body.name,
    email: req.body.email,
    review: req.body.review
  };

  if(!postdata.name || !postdata.review){
    res.redirect('/guestbook/add_review/?err=val');
  } else if((postdata.email != '' && 
            !check('postdata.email').isEmail())){
      res.redirect('guestbook/add_review/?err=email');
  } else{
    axios.post(apiOptions.server + path, postdata).then( 
      function(response){
        console.log(response);
        if(response.status === 201){
          res.redirect('/guestbook');
        }
      }
    ).catch(function(err){
        _showError(req, res, response.statusCode);
      }
    );
  }

};

/*** About page methods ***/

/* GET about*/
module.exports.about = function (req, res) {
  res.render('about', {title: 'About'});
};


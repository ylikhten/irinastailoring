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
module.exports.homelist = function (req, res) {
  renderHomepage(req, res);
};

/* Services page methods */

/* GET services pages  */
module.exports.services = function (req, res) {
  res.render('index', {title: 'Our Services'});
};

/* Guestbook page methods */

var renderGuestbook = function(req, res){
  res.render('guestbook', {
    title: 'Guestbook',
    pageHeader: {
      title: 'Guestbook and Reviews',
      strapline: 'Hi leave nice review pls'
    }
    //reviews: body // maybe add error trapping when loading reviews page
  });

};

/* GET guestbook page  */
module.exports.guestbook = function (req, res) {
  renderGuestbook(req, res);
  /*var requestOptions, path;
  path = '/api/reviews';
  requestOptions = {
    url : apiOptions.server + path,
    method: "GET",
    json : {},
  };
  request(
    requestOptions,
    function(err, response, body){
        renderReviews(req, res, body);
    });*/

};

/* About page methods */

/* GET location/hours page */
module.exports.about = function (req, res) {
  res.render('index', {title: 'About'});
};



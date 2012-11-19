var controller = require('../controllers/controller.js'),
    authentication = require('../models/authentication.js');

module.exports = function(app) {

  app.get('/', function(req, res){
    controller.index(req, res, function(error, view, data) {
      res.render(view, data);
    });
  });

  app.get('/single', function(req, res){
    controller.single(req, res, function(error, view, data) {
      res.render(view, data);
    });
  });

  app.get('/habits', function(req, res){
    controller.habits(req, res, function(error, view, data) {
      res.render(view, data);
    });
  });


}
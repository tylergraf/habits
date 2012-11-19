module.exports = {

  index: function(req, res, callback) {
    var data = {title:'things'};
    callback(null, 'index', data);
  },
  single: function(req, res, callback) {
    var dateFormat = require('dateformat');

    var data = {
      date: dateFormat(new Date(),"mmm d"),
      checkIn: [
        {
          title: "Floss",
          checked: false
        },
        {
          title: "Eat Breakfast",
          checked: true
        },
        {
          title: "Things",
          checked: false
        },
        {
          title: "Happy",
          checked: false
        },
        {
          title: "Love",
          checked: false
        }
      ]
    };

    callback(null, 'single', { title: 'Express', data: data});
  },

  habits: function(req, res, callback){
    var data = {
    tasks: [
      {
        title: "Floss",
      },
      {
        title: "Eat Breakfast",
      },
      {
        title: "Things",
      },
      {
        title: "Happy",
      },
      {
        title: "Love",
      }
    ]
  };
    callback(null, 'habits', { title: 'Express', data: data});

  }

}
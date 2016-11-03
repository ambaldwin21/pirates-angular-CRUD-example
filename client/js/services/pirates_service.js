
app.factory('PiratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    new: function(pirate) {
      return $http.post('/api/pirates', pirate);
    },
    one: function(pirates) {
      return $http.get('/api/pirates/' + pirates);
    }
  }
})

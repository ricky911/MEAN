app.factory('AnswerFactory', function($http, $cookies){
  var factory = {};

  factory.index = function(callback){
    $http.get('/answers').then(callback);
  }
  factory.create = function(newAnswer, callback){
    $http.post('/answers', newAnswer).then(callback);
  }
  factory.show = function(id, callback){
    $http.get('/answers/' + id).then(callback);
  }
  factory.addLike = function(id, callback){
    $http.post('/answers/' + id + '/like').then(callback);
  }

  return factory;
})
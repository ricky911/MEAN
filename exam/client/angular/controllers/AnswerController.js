app.controller('AnswerController', function(AnswerFactory, $location, $cookies, $routeParams){
  var self = this;
  self.answers = [];
  self.errors = [];
  self.new_answer_id;

  self.index = function(){
    AnswerFactory.index(function(res){
      self.answers = res.data;
    })
  }
  self.create = function(newAnswer){
    self.errors = [];
    if(newAnswer){
      newAnswer.user = $cookies.get('user_id');
      newAnswer.question = $routeParams.id
      AnswerFactory.create(newAnswer, function(res){
        self.newAnswer = {};
        if (res.data.errors) {
          for(key in res.data.errors){
            self.errors.push(res.data.errors[key].message);
          }
        } else {
          $location.url('/dashboard')
        }
      })
    } else {
      self.errors.push('Answers field cannot be blank')
    }
  }
})
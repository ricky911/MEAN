app.controller('QuestionController', function(QuestionFactory, AnswerFactory, $routeParams, $location, $cookies){
  var self = this;
  self.questions = [];
  self.question = {};
  self.errors = [];
  self.new_question_id;

  self.index = function(){
    QuestionFactory.index(function(res){
      self.questions = res.data;
    })
  }
  self.create = function(newQuestion){
    self.errors = [];
    if(newQuestion){
      newQuestion.user = $cookies.get('user_id');
      QuestionFactory.create(newQuestion, function(res){
        self.newQuestion = {};
        if (res.data.errors) {
          for(key in res.data.errors){
            self.errors.push(res.data.errors[key].message);
          }
        } else {
          $location.url('/dashboard');
        }
      })
    } else {
      self.errors.push('Question field cannot be blank')
    }
  }
  self.show = function(){
    QuestionFactory.show($routeParams.id, function(res){
      if (res.data.errors) {
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.errors.push(error);
        }
      } else {
        self.question = res.data;
      }
    });
  }
  self.addLikes = function(answer_id){
    AnswerFactory.addLikes(answer_id, self.show);
  }
})
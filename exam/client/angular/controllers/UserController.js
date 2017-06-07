app.controller('UserController', function(UserFactory, $location, $cookies, $routeParams){
  var self = this;
  self.users = [];
  self.user = {};
  self.registration_errors = [];
  self.login_errors = [];

  self.index = function(){
    UserFactory.index(function(res){
      self.users = res.data;
    })
  }

  self.show = function(){
    UserFactory.show($routeParams.id, function(res){
      self.friend = res.data;
    });
  }

  self.create = function(newUser){
    self.registration_errors = [];
    UserFactory.create(newUser, function(res){
      console.log(res)
      self.newUser = {};
      if(res.data.errors){
        for(key in res.data.errors){
          var error = res.data.errors[key]
          self.registration_errors.push(error.message)
        }
      } else {
        var user_id = res.data._id
        $cookies.put('user_id', user_id)
        $location.url('/dashboard');
      };
    });
  };

  self.login = function(user){
    self.login_errors = [];
    UserFactory.login(user, function(res){
      self.user = {};
      // console.log(res)
      if(res.data.errors){
        // console.log(res)
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.login_errors.push(res.data.errors[key].message);
        }
      } else {
        $cookies.put('user_id', res.data._id);
        $location.url('/index');
      }
    })
  }

  self.logout = function(){
    $cookies.remove('user_id');
    $location.url('/index');
  }

  self.check = function(){
    UserFactory.check(function(user){
      if (user) {
        self.user = user;
      } else {
        $location.url('/index');
      }
    })
  }
})
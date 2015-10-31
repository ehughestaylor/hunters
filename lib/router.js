Router.map(function(){
  this.route('home', {path:'/'});
});
Router.map(function(){
  this.route('profile', {
    path: '/profile',
    data: function() {return Meteor.user();}
    });
});

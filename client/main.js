Template.profile.helpers({
     username: function() {return Meteor.user().username},
     email: function() {return Meteor.user().emails[0].address}
});

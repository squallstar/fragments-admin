Template.usersList.onCreated(function () {
  Meteor.subscribe('fragments');
  Meteor.subscribe('collections');
});
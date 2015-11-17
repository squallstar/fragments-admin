Meteor.publish('users', function () {
  return Users.find({}, {
    fields: {
      emails: 1,
      profile: 1,
      'services.google.email': 1
    }
  });
});

Meteor.publish('fragments', function () {
  return Fragments.find();
});

Meteor.publish('collections', function () {
  return Collections.find();
});
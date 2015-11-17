Meteor.publish('users', function () {
  return Users.find({}, {
    fields: {
      emails: 1,
      profile: 1
    }
  });
});

Meteor.publish('fragments', function () {
  return Fragments.find();
});
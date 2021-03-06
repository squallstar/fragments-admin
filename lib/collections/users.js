Users = new Mongo.Collection('users');

Users.after.remove(function (userId, user) {
  if (Meteor.isServer) {
    console.log('Cleaning up documents for user', user._id);
    
    [Collections, SearchHistory].forEach(function (collection) {
      collection.remove({ user: user._id });
    });
    
    Fragments.remove({ 'user._id' : user._id });
  }
});

Users.allow({
  remove: function (userId, doc) {
    return true;
  }
});

Fragments = new Mongo.Collection('Fragments');

Fragments.allow({
  remove: function (userId, doc) {
    return true;
  }
});
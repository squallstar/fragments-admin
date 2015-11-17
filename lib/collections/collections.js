Collections = new Mongo.Collection('Collections');

Collections.allow({
  remove: function (userId, doc) {
    return true;
  }
});
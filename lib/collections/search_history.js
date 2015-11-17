SearchHistory = new Mongo.Collection('SearchHistory');

SearchHistory.allow({
  remove: function (userId, doc) {
    return true;
  }
});
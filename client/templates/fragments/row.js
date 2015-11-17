Template.fragmentsListRow.helpers({
  user: function () {
    return Users.findOne(this.user);
  }
});
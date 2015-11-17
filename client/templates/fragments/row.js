Template.fragmentsListRow.helpers({
  user: function () {
    return Users.findOne(this.user);
  },
  status: function () {
    if (this.fetched_at) {
      return 'success';
    }
  }
});

Template.fragmentsListRow.events({
  'click [data-delete]': function (event) {
    event.preventDefault();
    Fragments.remove(this._id);
  }
});
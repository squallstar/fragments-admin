Template.usersListRow.helpers({
  email: function () {
    return this.emails && this.emails.length ? this.emails[0].address : 'Not defined';
  }
});

Template.usersListRow.events({
  'click [data-delete]': function (event, template) {
    event.preventDefault();

    Users.remove(this._id);
  }
});
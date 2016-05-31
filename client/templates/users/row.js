Template.usersListRow.helpers({
  primaryEmail: function () {
    return this.emails && this.emails.length ? this.emails[0].address : null;
  },
  servicesList: function () {
    var services = [];
    _.keys(this.services).forEach((service) => {
      services.push(_.extend({ name: service }, this.services[service]));
    });
    return services;
  },
  fragmentsCount: function () {
    return Fragments.find({ 'user._id': this._id }).count();
  },
  collectionsCount: function () {
    return Collections.find({ user: this._id }).count();
  }
});

Template.usersListRow.events({
  'click [data-delete]': function (event) {
    event.preventDefault();
    Users.remove(this._id);
  }
});

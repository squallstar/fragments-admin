Template.usersListRow.helpers({
  primaryEmail: function () {
    return this.emails && this.emails.length ? this.emails[0].address : 'Not defined';
  },
  servicesList: function () {
    var services = [];
    _.keys(this.services).forEach((service) => {
      services.push(_.extend({ name: service }, this.services[service]));
    });
    return services;
  }
});

Template.usersListRow.events({
  'click [data-delete]': function (event) {
    event.preventDefault();
    Users.remove(this._id);
  }
});
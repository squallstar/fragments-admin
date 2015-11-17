Router.route('/users', {
  name: 'users.list',
  waitOn: function () {
    return Meteor.subscribe('users');
  },
  data: function () {
    return {
      users: Users.find({}, { sort: { 'profile.name': 1 } })
    }
  }
});

Router.route('/', function () {
  Router.go('users.list');
});
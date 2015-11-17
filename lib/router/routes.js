Router.route('/', function () {
  Router.go('users.list');
});

Router.route('/users', {
  name: 'users.list',
  waitOn: function () {
    return Meteor.subscribe('users');
  },
  data: function () {
    return {
      users: Users.find({}, { sort: { 'profile.name': 1 } })
    };
  }
});

Router.route('/fragments', {
  name: 'fragments.list',
  waitOn: function () {
    return [
      Meteor.subscribe('users'),
      Meteor.subscribe('fragments')
    ];
  },
  data: function () {
    return {
      fragments: Fragments.find({}, { sort: { created_at: -1 } })
    };
  }
});
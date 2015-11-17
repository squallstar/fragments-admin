Template.header.helpers({
  currentRoute: function () {
    return Router.current().route.getName();
  },
  navRoutes: function () {
    return [
      { name: 'Users', route: 'users.list' },
      { name: 'Fragments', route: 'fragments.list' }
    ];
  }
});
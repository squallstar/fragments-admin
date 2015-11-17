Template.header.helpers({
  currentRoute: function () {
    return Router.current().route.getName();
  }
});
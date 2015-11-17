Handlebars.registerHelper('timeAgo', function (timestamp) {
  return moment(timestamp).fromNow();
});

Handlebars.registerHelper('equals', function (a, b) {
  return a === b;
});
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

  }
});
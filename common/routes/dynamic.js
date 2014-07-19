Router.map(function () {
  this.route('items', {
    waitOn: function(){
      Meteor.subscribe('items');
    }
  });

  this.route('item', {
    path: '/item/:_id',
    waitOn: function(){
      Meteor.subscribe('item', this.params._id);
    },
    data: function(){
      return Items.findOne(this.params._id);
    }
  });
});
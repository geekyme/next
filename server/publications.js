Meteor.publish('items', function(){
  return Items.find();
})

Meteor.publish('item', function(id){
  return Items.find(id);
})

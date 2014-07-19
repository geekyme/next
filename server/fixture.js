Meteor.startup(function(){
  if(Items.find().count() == 0){
    Items.insert({name: 'Red bag', category: 'bag'});
    Items.insert({name: 'Brown shoe', category: 'shoe'});
  }
})
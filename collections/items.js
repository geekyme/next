// collection schema, methods and permissions

var itemsSchema = new SimpleSchema({
  name: {
    type: String
  },
  category: {
    type: String,
    allowedValues: ['bag', 'shoe', 'top', 'bottom']
  }
})

Items = new Meteor.Collection('items');

Items.attachSchema(itemsSchema);

Items.allow({
  insert: function (userId, doc) {
    return false;
  },
  update: function (userId, doc, fields, modifier) {
    return false;
  },
  remove: function (userId, doc) {
    return false;
  }
});
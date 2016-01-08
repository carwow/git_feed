Meteor.publish("commits", function() {
  return Commits.find({});
})


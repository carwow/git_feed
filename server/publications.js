Meteor.publish("commits", function() {
  return Commits.find({}, {limit: 20, sort: {date: -1}});
})


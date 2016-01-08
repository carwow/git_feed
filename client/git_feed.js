// counter starts at 0
Session.setDefault('counter', 0);

Template.commitList.onCreated(() => {
  Meteor.subscribe("commits");
})

Template.commitList.helpers({
  commits() {
    return Commits.find();
  }
});

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

Template.commitList.events({
  'click button'() {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});

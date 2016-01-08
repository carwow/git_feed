// counter starts at 0
Session.setDefault('counter', 0);

Template.commitList.onCreated(() => {
  Meteor.subscribe("commits");
})

Template.commitList.helpers({
  commits() {
    return Commits.find({}, {limit: 20, sort: {date: -1}});
  }
});

Template.commitCard.helpers({
  escapeMessage(message) {
    let new_message = message.replace(/\n/g,'<br/>');
    return new_message
  },
  showAvatar(avatar_url) {
    if (avatar_url) {
      return avatar_url
    }
    return 'images/avatar.png'
  },
  showDate(date) {
    return moment(date).format("DD/MM/YYYY HH:MM")
  }
});

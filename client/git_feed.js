// counter starts at 0
Session.setDefault('counter', 0);

Template.commitList.onCreated(() => {
  Meteor.subscribe("commits");
})

Template.commitList.helpers({
  commits() {
    return Commits.find({});
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
  },
  showRepo(repo) {
    repo = repo.replace(/^(.)/g, function($1) { return $1.toUpperCase() })
    repo = repo.replace(/[-_]/g," ")
    return repo
  }
});

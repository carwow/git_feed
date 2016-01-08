Template.commitList.onCreated(() => {
  Meteor.subscribe("commits");
})

Template.commitList.helpers({
  commits() {
    return Commits.find({}, {sort: {date: -1}});
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
    return moment(date).format("DD/MM/YYYY HH:mm")
  },

  showRepo(repo) {
    repo = repo.replace(/^(.)/g, function($1) { return $1.toUpperCase() })
    repo = repo.replace(/[-_]/g," ")
    return repo
  },
  showRepoTag(repo) {
    return repo[0].toUpperCase()
  },

  strToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let hex = ((hash>>24)&0xFF).toString(16) +
            ((hash>>16)&0xFF).toString(16) +
            ((hash>>8)&0xFF).toString(16) +
            (hash&0xFF).toString(16);
    // Sometimes the string returned will be too short so we
    // add zeros to pad it out, which later get removed if
    // the length is greater than six.
    hex += '000000';
    hex = '#'+hex.substring(0, 6);
    console.log(hex)
    hsv = tinycolor(hex).toHsv();
    hsv.h /= 2;
    hsv.s /= 2;
    hex = tinycolor(hsv).toHexString();
    console.log(hex)
    return hex
  }

});

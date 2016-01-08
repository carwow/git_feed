Meteor.startup(() => {
  Meteor.setInterval(getCommits, 60000);
})


function getCommits() {
  list = Github.getCommits('quotes_site')
  saveCommits('quotes_site', list);

  list = Github.getCommits('research_site')
  saveCommits('research_site', list);
}

function saveCommits(repo, list) {
  list.data.forEach(info => {
    avatar_url = info.author ? info.author.avatar_url : null;
    Commits.insert({
      sha: info.sha,
      author: {
        name: info.commit.author.name,
        avatar_url: avatar_url
      },
      date: Date.parse(info.commit.author.date),
      message: info.commit.message,
      repo: repo
    })
  })
}

function saveCommits(repo, list) {
  list.data.forEach(info => {
    let avatar_url = info.author ? info.author.avatar_url : null;

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

function deleteOldCommits(repo) {
  Commits.remove({repo: {$eq: repo}})
}

function getCommits() {
  let list = Github.getCommits('quotes_site', function(error, result) {
    if (error) {
      return;
    }
    deleteOldCommits('quotes_site');
    saveCommits('quotes_site', result);
  })

  list = Github.getCommits('research_site', function(error, result) {
    if (error) {
      return;
    }
    deleteOldCommits('research_site');
    saveCommits('research_site', result);
  })
}

Meteor.startup(() => {
  Meteor.setInterval(getCommits, 120000);
  getCommits()
})


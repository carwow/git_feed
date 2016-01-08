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
  let repos = Github.getRepos()

  repos.forEach( repo => {
    results = Github.getCommits(repo)
    deleteOldCommits(repo);
    saveCommits(repo, results);
  })
}

Meteor.startup(() => {
  Meteor.setInterval(getCommits, 120000);
  getCommits()
})


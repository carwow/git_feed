//Meteor.startup(() => {
//  Meteor.setInterval(getCommitsForQuotesSite, 60000)
//});

function getCommitsForQuotesSite() {
  list = Github.getCommits('quotes_site')
  //Commits.insert(list.data)
  list.data.forEach( commit => {
    Commits.insert(commit)
  })

}
//getCommitsForQuotesSite()


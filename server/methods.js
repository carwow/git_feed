Meteor.methods({
  getCommitsForQuotesSite() {
    list = Github.getCommits('quotes_site')
  }
})

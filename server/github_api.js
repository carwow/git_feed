Github = class Github {

  static callAPI(url, callback) {
    let auth_url = url+`?access_token=${this.getToken()}`
    console.log(auth_url)
    if (callback) {
      HTTP.get(auth_url, {headers: {'User-Agent': 'none'}}, callback);
    } else {
      return HTTP.get(auth_url, {headers: {'User-Agent': 'none'}});
    }
  }

  static getCommits(project, callback) {
    return this.callAPI(`https://api.github.com/repos/carwow/${project}/commits`, callback)
  }

  static getRepos(callback) {
    let repos = this.callAPI('https://api.github.com/orgs/carwow/repos', callback)
    let results = []
    repos.data.forEach(repo =>
      results.push(repo.name)
    )
    return results
  }

  static getToken() {
    return Meteor.settings.github_access_token
  }
}

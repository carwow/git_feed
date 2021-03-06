var github_access_token = process.env.GITHUB_ACCESS_TOKEN || Meteor.settings.github_access_token

Github = class Github {

  static callAPI(url, callback) {
    console.log(`[API] Request to: ${url}`)
    let auth_url = url+`?access_token=${this.getToken()}`
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
    return github_access_token
  }
}

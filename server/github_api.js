Github = class Github {
  static getCommits(project) {
    let url = `https://api.github.com/repos/carwow/${project}/commits?access_token=${this.getToken()}`
    return HTTP.get(url, {headers: {'User-Agent': 'none'}})
  }

  static getToken() {
    return Meteor.settings.github_access_token
  }
}
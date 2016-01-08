Github = class Github {
  static getCommits(project) {
    return HTTP.get(`https://api.github.com/repos/carwow/${project}/commits?access_token=${this.getToken()}`, {headers: {'User-Agent': 'none'}})
  }

  static getToken() {
    return Meteor.settings.github_access_token
  }
}


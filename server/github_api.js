Github = class Github {
  static getCommits(project, callback) {
    let url = `https://api.github.com/repos/carwow/${project}/commits?access_token=${this.getToken()}`
    HTTP.get(url, {headers: {'User-Agent': 'none'}}, callback);
  }

  static getToken() {
    return Meteor.settings.github_access_token
  }
}

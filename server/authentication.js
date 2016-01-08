var username = process.env.USERNAME || Meteor.settings.username
var password = process.env.PASSWORD || Meteor.settings.password

var basicAuth = new HttpBasicAuth(username, password);
basicAuth.protect();


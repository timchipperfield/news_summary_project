// var LoadDoc = require('./lib/models/getApiContent.js').LoadDoc;

window.addEventListener("load", function() {
  // loaded = new LoadDoc();
  // loaded.getNewsString();
  var articles = new Articles(Story, LoadDoc);
  articles.readTheNews();
});

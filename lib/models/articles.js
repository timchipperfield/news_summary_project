(function(exports) {
  function Articles(Story, LoadDoc) {
    this.story = Story;
    this.doc = LoadDoc;
  }

  Articles.prototype.readTheNews = function() {
    var stories = [];
    var doc = new this.doc();
    // var parsedDoc = JSON.parse(doc.getNewsString());

    for (var i in doc.getNewsString().response.results) {
      objects.push(new this.story(i));
    }
    return stories;
  };


  // Articles.prototype.headlines = function(obj, webTitle) {
  //   var objects = [];
  //   for (var i in obj) {
  //       if (!obj.hasOwnProperty(i)) continue;
  //       if (typeof obj[i] == 'object') {
  //           objects = objects.concat(this.headlines(obj[i], webTitle));
  //       } else if (i == webTitle) {
  //           objects.push(obj[i]);
  //       }
  //   }
  //   return objects;
  // };

  exports.Articles = Articles;
})(this);

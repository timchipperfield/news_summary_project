(function(exports) {
  function Articles() {
  }

  Articles.prototype.headlines = function(obj, webTitle) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(this.headlines(obj[i], webTitle));
        } else if (i == webTitle) {
            objects.push(obj[i]);
        }
    }
    return objects;
  };

  exports.Articles = Articles;
})(this);

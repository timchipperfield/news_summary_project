(function(exports) {
function LoadDoc() {
}

LoadDoc.prototype.getNewsString = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      // document.getElementById("demo").innerHTML
       return xhttp.responseText;
    }
  };
  xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics", true);
  xhttp.send();
};

exports.LoadDoc = LoadDoc;
})(this);

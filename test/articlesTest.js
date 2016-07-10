// As a busy politician
// I can see all of today's headlines in one place
// So I know what the big stories of the day are
  var expect = require('chai').expect;
  var json = require( "./newsStory.json");

  var Story = require('../lib/models/story.js').Story;
  var Articles = require('../lib/models/articles.js').Articles;

  describe('a series of news articles', function() {
    var articles;

    beforeEach(function() {
      articles = new Articles();
    });

    it('shows all stories', function() {
      expect(articles.headlines(json, 'webTitle')).to.contain("Online outrage greets Andrea Leadsom's comments about Theresa May");
      console.log(articles.headlines(json, 'webTitle'));
      console.log(json.response.results);
    });
  });

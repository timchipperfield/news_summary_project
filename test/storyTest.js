// As a busy politician
// I can see all of today's headlines in one place
// So I know what the big stories of the day are
var expect = require('chai').expect;

var Story = require('../lib/models/story.js').Story;

describe('a news story', function() {
  var story;

  beforeEach(function() {
    story = new Story(aStory);
  });

  it('has a headline', function() {
    expect(story.headline).to.eq("Leadsom attacks 'gutter journalism' in row over motherhood quotes");
  });


});

var aStory = {
   "id":"politics/2016/jul/08/andrea-leadsom-suggests-she-would-make-better-pm-as-she-has-children",
   "type":"article",
   "sectionId":"politics",
   "sectionName":"Politics",
   "webPublicationDate":"2016-07-09T08:22:40Z",
   "webTitle":"Leadsom attacks 'gutter journalism' in row over motherhood quotes",
   "webUrl":"https://www.theguardian.com/politics/2016/jul/08/andrea-leadsom-suggests-she-would-make-better-pm-as-she-has-children",
   "apiUrl":"https://content.guardianapis.com/politics/2016/jul/08/andrea-leadsom-suggests-she-would-make-better-pm-as-she-has-children",
   "isHosted":false
};

/*---- SERVICES ----*/

myApp.service('VoiceServices', function($http){
  var sv = this;

  sv.getAudio = function(input){
    console.log('In getAudio with:', input);

    sv.wordObjects = [];

    var webster = 'http://www.dictionaryapi.com/api/v1/references/sd2/xml/' + input + '?key=c718d2e8-bf66-4605-bfb8-fece23e2a059';

    var wordnik = 'http://api.wordnik.com:80/v4/word.json/' + input + '/definitions?limit=200&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    //var pearsons = 'http://api.pearson.com/v2/dictionaries/entries?headword=' + input;

    return $http({
      method: "GET",
      url: wordnik
    }).then(function(response) {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        sv.wordObject = {
          id: i,
          word: response.data[i].word,
          speech: response.data[i].partOfSpeech,
          text: response.data[i].text
        };

        sv.wordObjects.push(sv.wordObject);
      }

      console.log('Word Objects:', sv.wordObjects);

  }); // end of .then response
}; // end of getAudio function

  sv.getBooks = function(){
    console.log('We are now inside of .getBooks function in services.');

    var goodread = "https://www.goodreads.com/search.xml?key=OgnYKz5FlW7klB31kyok6w&q=Ender%27s+Game";

    return $http.get(goodread).then( function (response) {
      console.log('GoodRead response is:', response);
      //return response;
    });
  };



}); // end of myApp Services




//voice Rss api key: 	62378a7bd3604e27af2cf882110380f8

// example get request:
// http://api.voicerss.org/?key=<API key>&hl=en-us&src=Hello, world!

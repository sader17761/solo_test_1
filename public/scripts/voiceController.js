/*---- CONTROLLERS ----*/

console.log('VoiceController is working.');



var myApp = angular.module( 'myApp', [] );

myApp.controller('VoiceController', function(VoiceServices){
  var vm = this;

  vm.count = 0;

  vm.wordsArray = [];
  vm.wordsArrayLength = vm.wordsArray.length;

  vm.addWord = function(addWord){
    vm.wordsArray.push(addWord);
    vm.wordsArrayLength = vm.wordsArray.length;
  };

  vm.nextWord = function(){
    console.log('Count: ', vm.count);
    if(vm.count === vm.wordsArray.length - 1){
      vm.count = 0;
    } else {
      vm.count += 1;
    }
  };

  vm.readWord = function(){
    console.log('Count: ', vm.count);
    responsiveVoice.speak(vm.wordsArray[vm.count], "US English Male", {volume: 1, rate: 0.9});
  };

  vm.readDef = function(){
    VoiceServices.getAudio(vm.wordsArray[vm.count]).then(function(){
      console.log('back with:', VoiceServices.wordObjects);
      //vm.data = VoiceServices.wordObjects;
      responsiveVoice.speak(VoiceServices.wordObjects[0].text, "US English Male", {volume: 1, rate: 0.85});
    });
  };

  vm.readSpeech = function(){
    responsiveVoice.speak(vm.wordsArray[vm.count] + ', is a ' + VoiceServices.wordObjects[0].speech, "US English Male", {volume: 1, rate: 0.9});
  };

  vm.getWord = function(word){
    console.log('In playAudio function.');
    responsiveVoice.speak(word, "US English Male", {volume: 1, rate: 0.9});
    VoiceServices.getAudio(word).then(function(){
      console.log('back with:', VoiceServices.wordObjects);
      vm.data = VoiceServices.wordObjects;
      //responsiveVoice.speak(vm.definition, "US English Male", {volume: 1, rate: 1});
    });
  }; // end getWord function

  vm.searchBooks = function(){
    console.log('We are in the book search');
    VoiceServices.getBooks().then(function(){
      console.log('Back from GoodreadsAPI with:', VoiceServices.bookObjects);
    });
  }; // end searchBooks function



});

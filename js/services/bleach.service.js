  let BleachService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/bleach';
  //list of bleach characters
  this.getBleachChars = function() {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  }
  //single bleach character
  this.getBleach = function(bleachId){
    return $http({
      method: 'GET',
      url: url + '/' + bleachId,
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

  //add bleach character
   let Character = function(obj) {
    this.Nihongo = obj.Nihongo;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.url = obj.url;
    this.url2 = obj.url2;
    this.url3 = obj.url3;
  }; 

  this.addCharacter2 = function(obj) {
     let ch = new Character(obj);
     return $http.post(url, ch, PARSE.CONFIG);
  };
  
  

};

BleachService.$inject = ['$http', 'PARSE'];

export default BleachService;
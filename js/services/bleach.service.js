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
  
  

};

BleachService.$inject = ['$http', 'PARSE'];

export default BleachService;
  let BleachService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/bleach';
  //list of naruto characters
  this.getBleachChars = function() {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  }
  //single naruto character
  // this.getNaruto = function(narutoId){
  //   return $http({
  //     method: 'GET',
  //     url: url + '/' + narutoId,
  //     headers: PARSE.CONFIG.headers,
  //     cache: true
  //   });
  // };
  
  

};

BleachService.$inject = ['$http', 'PARSE'];

export default BleachService;
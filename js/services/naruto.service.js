let NarutoService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/naruto';
  //list of naruto characters
  this.getNarutos = function() {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  }
  //single naruto character
  this.getNaruto = function(narutoId){
    return $http({
      method: 'GET',
      url: url + '/' + narutoId,
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };
  
  

};

NarutoService.$inject = ['$http', 'PARSE'];

export default NarutoService;
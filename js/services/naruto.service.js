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

  //add naruto character
   let Character = function(obj) {
    this.Nihongo = obj.Nihongo;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.url = obj.url;
    this.url2 = obj.url2;
    this.url3 = obj.url3;
  }; 

  this.addCharacter = function(obj) {
     let ch = new Character(obj);
     return $http.post(url, ch, PARSE.CONFIG);
  };

  //edit naruto character
  this.updateNaruto = function(obj) {
    // console.log('#3',obj);
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };
  

};

NarutoService.$inject = ['$http', 'PARSE'];

export default NarutoService;
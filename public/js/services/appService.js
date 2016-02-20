angular.module('AppRestService', []).factory('ValueAddFactory', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() { 

            return $http.get('/api/ideas');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        post : function(ideaObj) {
            
            return $http.post('/api/ideas', ideaObj);
        },

        put : function(ideaID, ideaObj) {
            
            return $http.put('/api/ideas/' + ideaID, ideaObj);
        },

        // call to DELETE a nerd
        _delete : function(ideaID) {
        
            return $http.delete('/api/ideas/' + ideaID);
        }
    }       

}]);


angular.module('AppService', [])
  
  .service('ShareData', function ShareData() {
    
    var _this = this;
    _this.dataObj = {};

    // this.setItem = function(list){

    //   _this.dataList  = list;
    // }    

    // this.getItem = function(obj){
    //     var requiredData = {};
    //     for (var data in _this.dataList ) {
            
    //         if (data.hasOwnProperty(obj)) {
    //            requiredData = data;
    //            break;
    //         }
    //     }
    //     return requiredData;
    // }
});


 
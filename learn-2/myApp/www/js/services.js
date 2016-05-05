/**
 * Created by Gene on 2016/5/2.
 */
services.service("baseInfoService",['$http', function( $http){
    var doGetData = function (url,param) {

    };
    this.getBaseData = function() {
      return $http.get("data/personalInfo.json");
    };
    this.getEduInfo = function() {
      return $http.get("data/eduBack.json");
    };
    this.getProjectsInfo = function() {
      return $http.get("data/projectExp.json");
    };
    this.getAbilityInfo = function() {
      return $http.get("data/ability.json");
    }
}]);

controllers.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PersonCtrl', ['$scope', 'baseInfoService', function($scope, baseInfoService) {

  $scope.eduIfDetail = false;
  $scope.projectsIfDetail = false;
  $scope.skillsIfDetail = false;
  baseInfoService.getBaseData().then(function (data) {
    $scope.baseInfos = data.data;
  },function(err){
    console.log("error:"+err);
  });
  var getEduInfo = function() {
    baseInfoService.getEduInfo().then(function (data){
      $scope.edu = data.data;
    },function(err) {
      console.log("error:"+err);
    });
  };
  var getProjectsInfo = function() {
    baseInfoService.getProjectsInfo().then(function (data) {
      $scope.experience = data.data;
    },function(err) {
      console.log("error:"+err);
    });
  };
  var getAbilityInfo = function() {
    baseInfoService.getAbilityInfo().then(function (data) {
      $scope.skills = data.data;
    },function(err) {
      console.log("error:"+err);
    });
  }
  $scope.showDetail = function(index) {
    if(index == 0){
      getEduInfo();
      $scope.eduIfDetail = !$scope.eduIfDetail;
    }else if(index == 1){
      getProjectsInfo();
      $scope.projectsIfDetail = !$scope.projectsIfDetail;
    }else if(index == 2){
      getAbilityInfo();
      $scope.skillsIfDetail = !$scope.skillsIfDetail;
    }
  }
}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

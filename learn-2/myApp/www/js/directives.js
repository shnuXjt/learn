/**
 * Created by Gene on 2016/5/2.
 */
directives.directive('myEdu', function() {
  return {
    restrict: 'EA',
    templateUrl: "templates/myFile/edu.html"
  };
})
  .directive('myProjects', function() {
    return {
      restrict: 'EA',
      templateUrl: "templates/myFile/myProjects.html"
    };
  })
  .directive('mySkills', function() {
    return {
      restrict: 'EA',
      templateUrl: "templates/myFile/mySkills.html"
    };
  });

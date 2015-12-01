//developed by shubham aggarwal

var app=angular.module('mulsel' , ["checklist-model"]);
	

	app.controller('msController', ['$scope', '$http', function($scope, $http){
		$scope.count=-1;


		//get the list of areas from json file
		$http.get('js/metro.json').success(function(data){
									$scope.areas=data;  })
				  			  	  .error(function()
									{alert('Sorry could not populate the list');});


		//for toggling the view of thedropdown on click
	    $scope.viewtogg=function(){

	    	$scope.count=$scope.count+1;
	    	$scope.ind=0;

	    }
	    //store the values of checked boxes in an array to use them
	    $scope.users={

	    	zones:[]
  		};

      $scope.hidedrop = function(){
        $scope.count = -1;
      }

  		//check all options
  		 $scope.checkAll = function() {
   			 temps = angular.copy($scope.areas);
   			 $scope.users.zones=angular.copy(temps.name);
  			};

  		//uncheck all options
  		$scope.uncheckAll = function() {
  			  $scope.users.zones = [];
  			 
  		};
 			 

  		$scope.x=$scope.users.zones.length;
  		 $scope.res=function(){
  		 	if($scope.x>2)
  				{
  				$scope.users.zones = [$scope.x+" areas selected"];
  				}
  			};

}]);

app.directive('clickAnywhereButHere', function($document) {
  return {
    restrict : 'A',
    link : function(scope, elem, attr, ctrl) {

      elem.bind('click', function(e) {
        // this part keeps it from firing the click on the document.
        e.stopPropagation();
      });
      $document.bind('click', function() {
        // magic here.
        scope.$apply(attr.clickAnywhereButHere);
      });
      
      $(document).keyup(function(event) {
          if(event.which === 27) {
            // magic here.
          scope.$apply(attr.clickAnywhereButHere);
          }
      });
    }
  };
});
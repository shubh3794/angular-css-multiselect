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
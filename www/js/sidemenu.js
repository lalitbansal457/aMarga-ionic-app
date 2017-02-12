aMargaApp.controller('sideMenuCtrl', [ '$scope', '$ionicSideMenuDelegate' , function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	  };
}]);
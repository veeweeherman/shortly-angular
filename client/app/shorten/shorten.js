angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {prop : ''};
  $scope.addLink = function() {
	  Links.addLink($scope.link.prop)
	  	.then(function (thing) {
	  		$scope.link.prop = '';
	  	})
	  	.catch(function (error) {
			console.error(error);
		});
  };
});

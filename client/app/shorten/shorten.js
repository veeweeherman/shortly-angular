angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url : ''};
  $scope.addLink = function() {
  	console.log('$scope.link.url:' , $scope.link.url);
	  Links.addLink($scope.link)
	  	.then(function (thing) {
	  		$scope.link.url = '';
	  	})
	  	.catch(function (error) {
			console.error(error);
		});
  };
});


angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
		// console.log('what is data.url? :',data.url);
		Links.getLinks()
  		.then(function(url){
  		$scope.data.links = url;
		  })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();
});

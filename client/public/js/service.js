angular.module('myServices',[])
	.factory('DataService', function($http) {
		
		function getProducts() {
			return $http.get("http://localhost:3000/products/json");
		}

		return { getProducts }
	})
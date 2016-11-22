angular.module('myServices',[])
	.factory('DataService', function($http) {
		
		function getProducts() {
			return $http.get("http://localhost:3000/products/json");
		}

		function deleteItem(id){
			console.log("service: " + id);
			return $http.delete("http://localhost:3000/items/" + id)
		}

		function updateItem(id){
			console.log("service: " + id);
			return $http.put("http://localhost:3000/items/" + id)
		}

		function getDay(day){
			console.log("service: " + day);
			return $http.get("http://localhost:3000/date/" + day)
		}

		return { getProducts, deleteItem, updateItem }
	})
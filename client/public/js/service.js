angular.module('myServices',[])
	.factory('DataService', function($http) {
		
		function getProducts() {
			return $http.get("http://localhost:3000/api/articles");
		}

		function deleteItem(id){
			console.log("service: " + id);
			return $http.delete("http://localhost:3000/items/" + id)
		}

		function updateItem(id){
			console.log("service: " + id);
			return $http.put("http://localhost:3000/items/" + id)
		}

		function addDate(dateAppointment){
			console.log("service: " + dateAppointment);
			return $http.get("http://localhost:3000/appointments/show/" + dateAppointment)
		}

		return { getProducts, deleteItem, updateItem, addDate }
	})
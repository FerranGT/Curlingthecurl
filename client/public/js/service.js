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

		function newAppointment(selectedAppointment){
			console.log("service appointment");
			console.log(selectedAppointment);
			const stringAppointment = JSON.stringify(selectedAppointment)
			return $http.post("http://localhost:3000/appointments/", stringAppointment)

		}

		return { getProducts, deleteItem, updateItem, addDate, newAppointment }
	})
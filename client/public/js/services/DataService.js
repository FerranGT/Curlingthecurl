angular.module('myServices',[])
	.factory('DataService', function($http) {
		
		function getProducts() {
			return $http.get("/api/articles");
		}

		function deleteItem(id){
			console.log("service: " + id);
			return $http.delete("/items/" + id)
		}

		// function updateItem(id){
		// 	console.log("service: " + id);
		// 	return $http.put("/items/" + id)
		// }

		function addDate(dateAppointment){
			console.log("service: " + dateAppointment);
			return $http.get("/appointments/show/" + dateAppointment)
		}

		function newAppointment(selectedAppointment){
			console.log("service appointment");
			console.log(selectedAppointment);
			const stringAppointment = JSON.stringify(selectedAppointment)
			return $http.post("/appointments/", stringAppointment)

		}

		return { getProducts, deleteItem, addDate, newAppointment }
	})
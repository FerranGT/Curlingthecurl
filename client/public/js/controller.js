angular.module("myApp",['myServices','angularModalService','ngAnimate'])
	
	.controller('productsCtrl', function($scope, $rootScope, DataService, ModalService) {

		$scope.findProducts = () => {
			DataService.getProducts()
			.then( (response) => {
				$scope.productsServices = response.data;
				$scope.products = response.data.filter((elem) => {
					if (elem.type=="producto" && !!elem.url) {return elem}
				});
				$scope.services = response.data.filter((elem) => {
					if (elem.type=="servicio" && !!elem.url) {return elem}
				});
			})
		}

		$scope.findProducts();


		$scope.showCustom = (product) => {

			$rootScope.selectedProduct = product;

			ModalService.showModal({
				templateUrl: "/viewsClient/custom.html",
				controller: "CustomController"
			})
			.then( (modal) => {
				console.log("modal close....")
				modal.close.then(function(result) {
					$scope.customResult = "All good!";
				});
			})
			.catch( err => console.log(err) )

		};

		$scope.deleteElement = (id) => {
			let arrayTemp = $scope.productsServices;

		    if (confirm("Estas seguro que quieres eliminar este elemento") == true) {
				DataService.deleteItem(id)
					.success( (data, status, headers) => {
						console.log("before map: " + $scope.productsServices)
						$scope.productsServices = arrayTemp.filter((elem) => {
							if(elem._id != id) { return elem }
						})
						console.log("removed succesfully!")

		                $scope.ServerResponse = data;
		            })
		            .catch( err => console.log(err) )
	        }

		}

		$scope.updateNewPage = (id) => {
			console.log("controller: " + id);
			DataService.updateItem(id)
				.success( (data, status, headers) => {
					console.log("updated succesfully!")
		        })
		        .catch( err => console.log(err) )
		}

		$scope.updateElement = (id) => {
			console.log("controller: " + id);
			DataService.updateItem(id)
				.success( (data, status, headers) => {
					console.log("updated succesfully!")
		        })
		        .catch( err => console.log(err) )
		}


	})

	.controller('CustomController', function($scope, close) {
		$scope.close = close;
	})

	.controller('AppCtrl', function($scope, $rootScope, DataService, ModalService) {

        $scope.example = {
        	value: new Date(2015, 3, 22),
        	currentDate: new Date()
        };

        $scope.getdate = () => {
        	console.log("$scope.date");
        	console.log($scope.date);
        	const dateAppointment = new Date($scope.date).getTime();
        	console.log("dateAppointment");
        	console.log(dateAppointment);
        	console.log(new Date(dateAppointment));

        	DataService.addDate(dateAppointment)
				.then( (data, status, headers) => {
					//console.log(data);
					//console.log(data.data);
					const serverData = data.data;
					//console.log(serverData[0].date);
					const scheduleDay = [
						{	date: "",
							time: "10:00",
							free: true
						},
						{	date: "",
							time: "11:00",
							free: true
						},
						{	date: "",
							time: "12:00",
							free: true
						},
						{	date: "",
							time: "13:00",
							free: true
						},
						{	date: "",
							time: "16:00",
							free: true
						},
						{	date: "",
							time: "17:00",
							free: true
						},
						{	date: "",
							time: "18:00",
							free: true
						},
						{	date: "",
							time: "19:00",
							free: true
						}
					]
					const validatedSchedules = scheduleDay.map ((client) =>{
						client.date = $scope.date
						serverData.forEach ( (server) =>{
							if(client.time == server.time){
								client.free = false;
							}
						})
						return client;
					})
					$rootScope.appointments = validatedSchedules;
					console.log(validatedSchedules);
		        })
		        .catch( err => console.log(err) ) 	
        }

        $scope.showAppointmentModal = (appointment) => {

        	console.log("Modal controller");
        	console.log(appointment.date);
        	//const temp = new Date(appointment.date).getTime();
        	//console.log(temp);
        	//console.log(appointment.time);
        	const string = String(appointment.date)
        	const splitarray = string.split(" ")
        	const finalarray = [splitarray[2],splitarray[1],splitarray[3]]
        	appointment.dateString = finalarray.join(" ");
			$rootScope.selectedappointment = appointment;
			console.log("$rootScope.selectedappointment");
        	console.log($rootScope.selectedappointment.date);

			ModalService.showModal({
				templateUrl: "/viewsClient/modalappointment.html",
				controller: "CustomController"
			})
			.then( (modal) => {
				console.log("modal close....")
				modal.close.then(function(result) {
					$scope.customResult = "All good!";
				});
			})
			.catch( err => console.log(err) )
		};
    })




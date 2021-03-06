angular.module('myControllers')

	.controller('AppCtrl', function($scope, $rootScope, $location, DataService, ModalService) {

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
							{	dateString: "",
								time: "10:00",
								free: true
							},
							{	dateString: "",
								time: "11:00",
								free: true
							},
							{	dateString: "",
								time: "12:00",
								free: true
							},
							{	dateString: "",
								time: "13:00",
								free: true
							},
							{	dateString: "",
								time: "16:00",
								free: true
							},
							{	dateString: "",
								time: "17:00",
								free: true
							},
							{	dateString: "",
								time: "18:00",
								free: true
							},
							{	dateString: "",
								time: "19:00",
								free: true
							}
						]
						const validatedSchedules = scheduleDay.map ((client) =>{
							client.dateString = $scope.date
							client.date = dateAppointment;
							serverData.forEach ( (server) =>{
								if(client.time == server.time){
									client.free = false;
								}
							})
							return client;
						})
						$rootScope.appointments = validatedSchedules;
						console.log("$rootScope.appointments");
						console.log($rootScope.appointments);
			        })
			        .catch( err => console.log(err) ) 	
	        }

	        $scope.showAppointmentModal = (appointment) => {
	        	$rootScope.afterBooking = false; 
	        	$rootScope.beforeBooking = true;
	        	console.log("Modal controller");
	        	console.log(appointment.date);
	        	//const temp = new Date(appointment.date).getTime();
	        	//console.log(temp);
	        	//console.log(appointment.time);
	        	const string = String(appointment.dateString)
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
					modal.close.then(function(result, selectedappointment) {
						if ($rootScope.selectedappointment.name !== undefined){
								$rootScope.selectedappointment.free = false;
						}
					});
				})
				.catch( err => console.log(err) )
			};

			$scope.addAppointment = (selectedappointment) => {
				selectedappointment.name = $scope.name;
				selectedappointment.tlf = $scope.tlf;
				console.log("controller selectedappointment");
				console.log(selectedappointment);
				DataService.newAppointment(selectedappointment)
					.then( (data, status, headers) => {

						console.log("entro")
						console.log(data)
						$rootScope.afterBooking = true; 
	        			$rootScope.beforeBooking = false;
					})
					.catch( err => console.log(err) )

			}




	    })
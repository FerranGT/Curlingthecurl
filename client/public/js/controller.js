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
		//$scope.title = "my Modal Window"
	})

	.controller('AppCtrl', function($scope) {
        //$scope.date = new Date(2014, 3, 19);
        
        $scope.getdate = () => {
        	console.log($scope.date);
        	// let day = $scope.date;
        	// let temp = day.stringify.split(" ");
        	//let new array = [temp[1],temp[2],temp[3]];
        	//let day = temp[1]
        	//DataService.getDay(day);
        }
    })




// .controller('DropdownCtrl', function ($scope, $log) {
// 	$scope.items = [
// 	'Servicio',
// 	'Producto'
// 	];

// 	$scope.status = {
// 		isopen: false
// 	};

// 	$scope.toggled = function(open) {
// 		$log.log('Dropdown is now: ', open);
// 	};

// 	$scope.toggleDropdown = function($event) {
// 		$event.preventDefault();
// 		$event.stopPropagation();
// 		$scope.status.isopen = !$scope.status.isopen;
// 	};

// 	$scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
// 	$log.log($scope.appendToEl)
// });



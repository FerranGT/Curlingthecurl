angular.module('myControllers')


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
					console.log("Closing!!!")
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

		// $scope.updateNewPage = (id) => {
		// 	console.log("controller: " + id);
		// 	DataService.updateItem(id)
		// 		.success( (data, status, headers) => {
		// 			console.log("updated succesfully!")
		//         })
		//         .catch( err => console.log(err) )
		// }

		$scope.updateElement = (id) => {
			console.log("controller: " + id);
			DataService.updateItem(id)
				.success( (data, status, headers) => {
					console.log("updated succesfully!")
		        })
		        .catch( err => console.log(err) )
		}


	})
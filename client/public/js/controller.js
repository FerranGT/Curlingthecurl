angular.module("myApp",['myServices','angularModalService','ngAnimate'])
	
	.controller('productsCtrl', function($scope, $rootScope, DataService, ModalService) {

		$scope.findProducts = () => {
			DataService.getProducts()
			.then( (response) => {
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

	})


	.controller('CustomController', function($scope, close) {
		$scope.close = close;
		//$scope.title = "my Modal Window"
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



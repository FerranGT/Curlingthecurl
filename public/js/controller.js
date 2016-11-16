angular.module("myApp",['myServices'])
	.controller('demoCtrl', ($scope, DataService) => {
		$scope.findProducts = () => {
			DataService.getProducts()
				.then( function(response) {
					$scope.products = response.data;
					console.log(response);
				})
		}

	$scope.findProducts();

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



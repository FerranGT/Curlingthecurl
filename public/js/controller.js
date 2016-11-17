angular.module("myApp",['myServices','angularModalService','ngAnimate'])
	.controller('productsCtrl', ($scope, DataService, ModalService) => {
		
		$scope.findProducts = () => {
			DataService.getProducts()
				.then( function(response) {
					$scope.products = response.data.filter((elem) => {
					 	if (elem.type=="producto" && !!elem.url) {return elem}
					});
				})
		}


 		$scope.showCustom = function() {
 			console.log("showing modal...")
		    ModalService.showModal({
		      templateUrl: "viewsClient/custom.html",
		      controller: "CustomController"
		    })
		    .then(function(modal) {
		      modal.close.then(function(result) {
		        $scope.customResult = "All good!";
		      });
		    });

		  };

		$scope.findProducts();
	})
	.controller('CustomController', function($scope, close) {
		$scope.close = close;
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



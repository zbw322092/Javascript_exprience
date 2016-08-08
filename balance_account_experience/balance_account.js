angular.module("balance_app", [])
	.controller('Balance', ['$scope', '$timeout', function($scope, $timeout){
		
		(function () {
			var status = 1;
			var orange = {'background-color':'orange'},
			red = {'background-color':'red'},
			grey = {'background-color':'grey'};

			return $scope.changeThreeColors = function() {
				if (status === 1) {
					$scope.myStyle = orange;
					status++;
				} else if(status === 2) {
					$scope.myStyle = red;
					status++;
				} else if(status === 3) {
					$scope.myStyle = grey;
					status = 1;
				} else {
					return null;
				}
			};
		})();


		$scope.myAlert = function() {
			window.alert("ok");
		}

		$scope.myAlert2 = function() {
			window.alert("ok2");
		}		


		console.log(document);
		console.log(document.getElementsByTagName('input'));
		console.log(typeof document.getElementsByTagName('input')); // object

		console.log(document.getElementsByTagName('div'));
		console.log(document.getElementsByTagName('div').length);
		console.log(document.getElementsByTagName('div')[1]);

		var elementsArray = document.getElementsByTagName('div');
		console.log(elementsArray);

		console.log(document.getElementsByTagName('div')[1]);
		console.log(document.getElementsByTagName('div')[1].getAttribute('class'));
		console.log(document.getElementsByTagName('div')[1].getAttribute('ng-click')); // myAlert()
		

		// $timeout(function() {
		// 	window.alert('it is time');
		// 	$timeout(function() {
		// 		window.alert('it is inner time');
		// 	}, 2000);
		// }, 2000);
		

		

	}]);













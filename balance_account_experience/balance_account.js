angular.module("balance_app", [])
	.controller('Balance', ['$scope', function($scope){
		
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


	}]);
var myapp = angular.module('my_app',['datatables']);
myapp.controller('users', function($scope,$http){
	$scope.master = {};
	$scope.usersInformation = function () {
		$http({ 
			method: 'GET',
			url: 'get_users.php'
		})
		.then(function (success){
			$scope.users_list = [];
			$scope.users_list =success.data;	
		},function (error){
				console.log(error);
		});
	};
    $scope.addModal = function() {
		$scope.users_form = angular.copy($scope.master);
        $scope.form_name = 'Add New User Information';
        $('#form_modal').modal('show');
    };
    $scope.UserAddUpdate = function (users_form) {
       var users_information = users_form;
       $http({
         method: 'POST',
         url: 'UserAddUpdate.php',
         data: users_information,
        }).then(function(response) {
            $scope.usersInformation();
			$scope.success_msg = response.data;
        },function (error){
			console.log(error);
		});
       $('#form_modal').modal('hide');
    };
    $scope.EditModal = function(user) {
        $scope.form_name = 'Edit User Information';
		var edit_form = {};
		angular.copy(user, edit_form);
		$scope.users_form = edit_form;
		$scope.users_form.dob = new Date($scope.users_form.dob);		
        $('#form_modal').modal('show');
    };
	$scope.DeleteModal = function(user) {
		var r = confirm("Are you sure want to delete ?");
		if (r == true) {
			var users_record_id = user.id;
			$http({
				method: 'POST',
				url: 'UserDelete.php',
				data: users_record_id,
			}).then(function(response) {
				var index = $scope.users_list.indexOf(user);
				$scope.users_list.splice(index, 1);	
				$scope.success_msg = response.data;
			},function (error){
				console.log(error);
			});
		}
    };
});
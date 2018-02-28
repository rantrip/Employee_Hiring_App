var app = angular.module('employeesApp', []);


app.controller('EmployeeController', function employeeController($scope, $http) {
	$scope.getEmployeeData = function getEmployeeData() {
            	$http.get('http://localhost:8080/demo/employees').
                 then(function (response){
                	 $scope.employee_list = response.data;
                },function (error){
                	$scope.employee_list = [];
                    console.log(error);
                });
            };  	
        
        /* On Load */
        $scope.employees = [];
        
        var employee;
       //Add or update
        $scope.addEmployee = function addEmployee (employee){
       	urlPost = $http.post('http://localhost:8080/demo/createemployees', employee);
       	urlPost.then(function(response) {
       	$scope.success_msg = response.data;
       },function (error){
       	console.log(error);
       });
       }

       
        $scope.updateEmployee = function updateEmployee(employee) {
       	urlPost = $http.put('http://localhost:8080/demo/updateemployees', employee);
          urlPost.then(function(response) {
            $scope.success_msg = response.data;
           },function (error){
       		console.log(error);
       	}); 
       }
        
       var employeeId ='1';
       $scope.deleteEmployee = function deleteEmployee(employeeId){
    	   $http.delete('http://localhost:8080/demo/deleteemployees/'+employeeId)
			.then(function(response) {
				$scope.success_msg = response.data;
			},function (error){
				console.log(error);
			});
       } 
  });
var app = angular.module('employeesApp', []);


app.controller('EmployeeController', function employeeController($scope, $http) {
        var getEmployeeData = function getEmployeeData() {
            	$http.get('http://localhost:8080/demo/employees').
                 then(function (response){
                	 $scope.employees = response.data;
                },function (error){
                	$scope.employees = [];
                    console.log(error);
                });
            };  	
        
        /* On Load */
        $scope.employees = [];
        
         getEmployeeData(); 
         
         var employee;
       //Add or update
       var addEmployee = function addEmployee (employee){
       	urlPost = $http.post('http://localhost:8080/demo/createemployees', employee);
       	urlPost.then(function(response) {
       	$scope.success_msg = response.data;
       },function (error){
       	console.log(error);
       });
       }

       var updateEmployee = function updateEmployee(employee) {
       	urlPost = $http.put('http://localhost:8080/demo/updateemployees', employee);
          urlPost.then(function(response) {
               $scope.employeesInformation();
       		$scope.success_msg = response.data;
           },function (error){
       		console.log(error);
       	}); 
       }
  });
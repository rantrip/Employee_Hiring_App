var myapp = angular.module('demoApp',['datatables']);
myapp.controller('EmployeeController', EmployeeController);

function EmployeeController($scope,$http){
	//for the drop down list for employee position
	 $scope.employeePositions = [
         {positionName : "Direct", positionId : "1"},
         {positionName : "InDirect", positionId : "2"},
         {positionName : "Program Manager", positionId : "3"}
     ];
	 
	$scope.stateList = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	$scope.booleanFalg = ['true','false'];
	
	$scope.master = {};
    	
    var getAllEmployees= function getAllEmployees() {
    	$http.get('http://localhost:8080/demo/employees').
         then(function (response){
            $scope.employee_list = [];
            $scope.employee_list =response.data;   
        },function (error){
                console.log(error);
        });
    };
    
    $scope.employeesInformation = getAllEmployees();
 
    $scope.addModal = function() {
		$scope.users_form = angular.copy($scope.master);
        $scope.form_name = 'Add New User Information';
        $('#form_modal').modal('show');
    };
    
    $scope.EditModal = function(employee) {
        $scope.form_name = 'Edit User Information';
        var edit_form = {};
		angular.copy(employee, edit_form);
		$scope.users_form = edit_form;
		$('#form_modal').modal('show');
    };
   
    var addEmployee = function addEmployee (employee){
    	urlPost = $http.post('http://localhost:8080/demo/createemployees', employee);
    	urlPost.then(function(response) {
        $scope.employeesInformation();
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
    
    $scope.UserAddUpdate = function (users_form) {
        var empInfo = users_form;
        var  employee = { 
			    id:empInfo.id,
			    firstName:empInfo.firstName,
			    middleName:empInfo.middleName,
				lastName:empInfo.lastName,
				emailAddress:empInfo.emailAddress,
				phoneNumber:empInfo.phoneNumber,
				employeePosition:empInfo.employeePosition,
				employeeHiringDate:empInfo.employeeHiringDate,
				addressOne:empInfo.addressOne,
				addressTwo:empInfo.addressTwo,
				city:empInfo.city,
				state:empInfo.state,
				zipCode:empInfo.zipCode,
				activeFlag:empInfo.activeFlag
		};
		
        if(null != empInfo.id){
        	updateEmployee(employee);       	
        } else {
        	addEmployee(employee);
        }
        

        
//        
//        if(null != empInfo.id){
//        	//alert("NOT NULL UPDATE employee ID: " + empInfo.id);
//        	urlPost = $http.put('http://localhost:8080/demo/updateemployees', employee);
//        }
//        else{
//        	//alert("NULL CREATE employee ID: " + empInfo.id);
//        	urlPost = $http.post('http://localhost:8080/demo/createemployees', employee);
//        }
//        urlPost.then(function(response) {
//            $scope.employeesInformation();
//			$scope.success_msg = response.data;
//        },function (error){
//			console.log(error);
//		});
       $('#form_modal').modal('hide');
    };
    
    $scope.DeleteModal = function(employee) {
		var r = confirm("Are you sure want to delete ?");
		if (r == true) {
			var employeeId = employee.id;
			$http.delete('http://localhost:8080/demo/deleteemployees/'+employeeId)
			.then(function(response) {
				var index = $scope.employee_list.indexOf(employee);
				$scope.employee_list.splice(index, 1);	
				$scope.success_msg = response.data;
			},function (error){
				console.log(error);
			});
		}
    };
 
};
//});
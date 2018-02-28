angular.module('datatables', [])
var myapp = angular.module('demoApp',['datatables']);
myapp.controller('EmployeeController', EmployeeController);

function EmployeeController($scope,$http){
	//for the drop down list for employee position
	 $scope.employeePositions = [
         {positionName : "Direct", positionId : "1"},
         {positionName : "InDirect", positionId : "2"},
         {positionName : "Program Manager", positionId : "3"},
         {positionName : "Director", positionId : "4"},
         {positionName : "Executive", positionId : "5"}
     ];
	 
	$scope.stateList = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	
	$scope.master = {};
    	
	$scope.getAllEmployees= function getAllEmployees() {
    	$http.get('http://localhost:8080/demo/employees').
         then(function (response){
            $scope.employee_list = [];
            $scope.employee_list = response.data;   
        },function (error){
                console.log(error);
        });
    };
    
    $scope.addModal = function() {
		$scope.users_form = angular.copy($scope.master);
        $scope.form_name = 'Add New User Information';
        $('#form_modal').modal('show');
    };
    
    
    $scope.EditModal = function(employee) {
        $scope.form_name = 'Edit User Information';
        var edit_form = {};
		angular.copy(employee, edit_form);

		//The prepopulating the data for the radio button didn't work
		//had to assign it.
	
		if(employee.activeFlag ){
			edit_form.activeFlag = 'true';
		}
		else {
			edit_form.activeFlag = 'false';
		}
		$scope.users_form = edit_form;
		if( Number(edit_form.phoneNumber) != 0) {
			$scope.users_form.phoneNumber = Number(edit_form.phoneNumber);
		}
		var hiringDateInISO = edit_form.employeeHiringDate;
		var date1=new Date(hiringDateInISO);
		$scope.users_form.employeeHiringDate = date1;
		if( Number(edit_form.zipCode) != 0) {
			$scope.users_form.zipCode = Number(edit_form.zipCode);
		}

		$('#form_modal').modal('show');
    };
   
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
        	$scope.updateEmployee(employee);  
        } else {
        	$scope.addEmployee(employee);
        }
        
       $('#form_modal').modal('hide');
       location.reload();
    };
    
    $scope.DeleteModal = function(employee) {
    	var r = confirm("Are you sure want to delete ?");
		if (r == true) {
			$scope.deleteEmployee(employee);
			location.reload();
		}
	
    };
    

    $scope.deleteEmployee = function deleteEmployee(employee) {
		$http.delete('http://localhost:8080/demo/deleteemployees/'+employee.id)
		.then(function(response) {
			var index = $scope.employee_list.indexOf(employee);
			$scope.employee_list.splice(index, 1);	
			$scope.success_msg = response.data;
		},function (error){
			console.log(error);
		});
    }
 
};

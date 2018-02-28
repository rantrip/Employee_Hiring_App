describe('Employee Demo tests', function () {

        var $controller;
        var $httpBackend;
        var $scope;

        var employees = [{firstName: 'Ranjana', lastName: 'Tripathi'}, {firstName: 'Seema', lastName: 'Tripathi'}];
        
        beforeEach(module('employeesApp'));

        beforeEach(inject(function(_$controller_, _$httpBackend_) {
          $controller = _$controller_;
          $scope = {};
          $httpBackend = _$httpBackend_;
        }));

        describe('REST API Test : find all employees', function() {

          it('Should fetch all employees', function () {
           // $httpBackend.when('GET', 'http://localhost:8080/demo/employees').respond(employees);
            $httpBackend.expect('GET', 'http://localhost:8080/demo/employees').respond(employees);
            $controller('EmployeeController', { $scope: $scope });
            $httpBackend.flush();
            expect($scope.employees).toEqual(employees);
          });

        });
        
        
        describe('REST API Test : Add employee', function() {

            it('Should Add an employee', inject(function($http) {
                
                var $scope = {};
                var employee = {firstName: 'Ranjana', lastName: 'Tripathi'};
                
                /* Code under Test*/
             	urlPost = $http.post('http://localhost:8080/demo/createemployees', employee);
               	urlPost.then(function(response) {
                $scope.success_msg = response.data;
               },function (error){
               	console.log(error);
               });
                /* End Code */
               	
                $httpBackend.when('POST', 'http://localhost:8080/demo/createemployees', employee).respond(employee.id);
                $httpBackend.flush();
                expect($scope.success_msg).toEqual(employee.id);

              }));

          });

     }); 
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
            $httpBackend.expect('GET', 'http://localhost:8080/demo/employees').respond(employees);
            $controller('EmployeeController', { $scope: $scope });
            $scope.getEmployeeData();
            $httpBackend.flush();
            expect($scope.employees).toEqual(employees);
          });

        });
        
        
        describe('REST API Test : Add employee', function() {

            it('Should Add an employee', inject(function($http) {
                
                var $scope = {};
                var employee = {firstName: 'Ranjana', lastName: 'Tripathi'};
                $httpBackend.expect('POST', 'http://localhost:8080/demo/createemployees', employee).respond(employee);
                $controller('EmployeeController', { $scope: $scope });
                $scope.addEmployee(employee);
                $httpBackend.flush();
                expect($scope.success_msg).toEqual(employee);

              }));

          });
        
        describe('REST API Test : Update employee', function() {

            it('Should Update an employee', inject(function($http) {
                
                var $scope = {};
                var employee = {firstName: 'Ranjana', lastName: 'Tripathi'};
                $httpBackend.expect('PUT', 'http://localhost:8080/demo/updateemployees', employee).respond(employee);
                $controller('EmployeeController', { $scope: $scope });
                $scope.updateEmployee(employee);
                $httpBackend.flush();
                expect($scope.success_msg).toEqual(employee);

              }));

          });
        
        describe('REST API Test : Delete employee', function() {

            it('Should Delete an employee', inject(function($http) {
                
                var $scope = {};
                var employee = {firstName: 'Ranjana', lastName: 'Tripathi', id: '1'};
                $httpBackend.expect('DELETE', 'http://localhost:8080/demo/deleteemployees/'+employee.id).respond(employee.id);
                $controller('EmployeeController', { $scope: $scope });
                $scope.deleteEmployee(employee.id);
                $httpBackend.flush();
                expect($scope.success_msg).toEqual(employee.id);

              }));

          });

     }); 
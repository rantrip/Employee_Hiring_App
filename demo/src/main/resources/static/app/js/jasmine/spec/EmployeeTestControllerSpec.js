describe('Employee Demo tests', function () {

        var $controller;
        var $httpBackend;
        var $scope;

        var employees = [{firstName: 'Ranjana', lastName: 'Tripathi', id: '1'}, {firstName: 'Seema', lastName: 'Tripathi',  id: '2'}];
        
        beforeEach(module('demoApp'));

        beforeEach(inject(function(_$controller_, _$httpBackend_) {
          $controller = _$controller_;
          $scope = {};
          $httpBackend = _$httpBackend_;
        }));

        
        describe('REST API Test : find all employees', function() {

          it('Should fetch all employees', function () {
            $httpBackend.expect('GET', 'http://localhost:8080/demo/employees').respond(employees);
            $controller('EmployeeController', { $scope: $scope });
            $scope.getAllEmployees();
            $httpBackend.flush();
            expect($scope.employee_list).toEqual(employees);
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
                $scope.employee_list = employees;
                $httpBackend.expect('DELETE', 'http://localhost:8080/demo/deleteemployees/'+employee.id).respond(employee.id);
                $controller('EmployeeController', { $scope: $scope });
                $scope.deleteEmployee(employee);
                $httpBackend.flush();
                expect($scope.success_msg).toEqual(employee.id);

              }));

          });

     }); 
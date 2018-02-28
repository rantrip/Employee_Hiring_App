Summary of the application:
******************************
Employee_Hiring_App is a web application to provide hiring team a web interface.
Application allows hiring team to enlist and manage hired employees information.  
Application provides flexibility to retrieve, add, modify and delete hired employees information.

Technologies Summary:
***********************
The application is developed using MongoDB, SpringBoot, AngularJS for the web application development.
AngularJS: 
	The user interface implementation.
SpringBoot: 
	REST API development for  services i.e CRUD operations.
MogoDB: 
	Storing, updating and retrieving information to/from the db table.
JUnit, Mockito: 
	Middle tier implementation verification.
Jasmine: 
	Front End AngularJS verification.
Maven: 
	To build, compile and packaging the web project.


Required Configuration:
***********************
Git:
****
	Get the project from GitHub: "git clone https://github.com/rantrip/Employee_Hiring_App.git"


MongoDB:
********
   Install MongoDB. (Remember directory structure)
   create folder C:\data\db
   Add MongodDB's bin directory to the Environment Variable's PATH
   Open command prompt.
   At prompt give the command 'mongod' 
   Open another command prompt 
   At prompt give the command 'mongo'
   At command prompt for mongo:
		Create Database in MongoDB.
			At command prompt type 'use employeeDemoDB'
		Check Database was created.
			At command prompt type 'db'
			The 'db' command should show newly created 'employeeDemoDB'
			
Spring Tool Suite:
******************
    Download and install latest Spring Tool Suite.
	
Configuration for the 'demo' project taken from GitHub:
****************************************************
	After Spring Tool Suite Installation.
	Find STS.exe, double click STS.exe
	The above will start Spring Tool Suite.
	Create a workspace for the project.
	Project explorer will open.
	At the project explorer.
		Right Click, select import. The select box opens.
		At Select Box, under General, select 'Existing Project into Workspace'
		The Select Box opens.
			At Select box, Click on Browse 
				Point to the directory with .project file (The imported GIT project)
	Once the project is created.
		Run Maven install (This will build the project with Maven)
	Right click on 'Demo', Click "Run As" --> Java Application.
		Select Java Application Box opens.
			Select 'Demo Application -- com.employee.demo'
			The above will start the integrated Tomcat server.
			And the application will be deployed.
			
Accessing the application on Browser:
*************************************
	http://localhost:8080/employeeDemo.html
	The above url should allow the hiring team to Add, Update and Delete employee information.


   


 
var app = angular.module('myNews');

/*
Controller for the Main page which will display the requested data.
It calls the service dataGetService which has a function getData.
The getData function calls back to either the response ok(cbOK) or the
response not ok cbNOTOK and sends the value of the loop.
Once the request is resolved, data from the http request is available
and the data is then added to an array used to fill out the content of the main page
If the request is rejected (ie no response or bad reponse) a catch is triggered
which alerts the user.
*/
app.controller("MainCtrl", function($scope, dataGetService){
	$scope.returnedData = [];

	for(var i=0; i<$scope.choice; i++){
		dataGetService.getData(cbOK,cbNOTOK,i);
	}
	
	//called from the dataGetService to return the requested data to the data array
	function cbOK(responseData){
		$scope.returnedData.push(responseData);
	}

	//called from the dataGetService on a bad response to notify the user
	function cbNOTOK(responseData) {
		alert(responseData);
	}
	
});

//Controller for the Settings page
app.controller('SettingsCtrl',function($scope){
	
});
var app = angular.module('myNews');

app.controller("mainCtrl",function($scope, myjsonblobService, storageService){
	
	//On startup check if there is a myjsonblobID saved in the local storage
	$scope.$on("$ionicView.beforeEnter",function(){
		var ID = storageService.getIDFromStorage();

		//if no id, set reminder data to default
		if(ID == "undefined" || ID === null || ID === ""){
			$scope.reminder = {
				titleText : "",
				descText : "",
				priority : 1,
				complete : false
			
							
			}
			//show save button
			$scope.haveID = false;
		}
		//if there is an id, set id from storage to myjsonblobService, then get data from myjsonblob
		else{
			//show update and delete buttons
			$scope.haveID = true;
			//let the myjsonblob ID service know the current myjsonblob ID
			myjsonblobService.setmyjsonblobID(ID);
			//get myjsonblob data
			myjsonblobService.getmyjsonblob(getCallbackOK,getCallbackNOTOK);
		}
	});

/*----------------- Link Service Functions -------------------------------------*/

	$scope.createmyjsonblob = function(){
		myjsonblobService.createmyjsonblob(createCallbackOK,createCallbackNOTOK,$scope.reminder);
	}

	$scope.updatemyjsonblob = function(){
		myjsonblobService.updatemyjsonblob(updateCallbackOK,updateCallbackNOTOK,$scope.reminder);
	}

	$scope.deletemyjsonblob = function(){
		myjsonblobService.deletemyjsonblob(deleteCallbackOK,deleteCallbackNOTOK,$scope.reminder);
		
		//reset shown data to default values
		$scope.reminder = {
			titleText : "",
			descText : "",
			priority : 1,
			complete : false
			
		}
		$scope.haveID = false;

		//removes old myjson ID from local storage
		storageService.removeIDFromStorage();
	}
		
		
		
	

/*----------------- Callback Functions -------------------------------------*/

	//Callback functions for the create new myjsonblob request
	function createCallbackOK(){
		//update shown buttons
		$scope.haveID = true;
		//get new myjsonblobID
		ID = myjsonblobService.getmyjsonblobID();
		//save new myjsonblobID to local storage
		storageService.setIDInStorage(ID);
	}
	function createCallbackNOTOK(){
		alert("Sorry, unable to create reminder, please try again later.");
	}

	//Callback functions for the get myjsonblobID request
	function getCallbackOK(data){
		//update scope data with saved reminder data
		$scope.reminder = data;
		
		
	}
	function getCallbackNOTOK(){
		alert("Sorry, unable to get reminder, please try again later.");
	}

	//Callback function for the update myjsonblobID request
	
	function updateCallbackOK(data){
		$scope.reminder = data;
		//update scope data with new reminder
		
	}
	
	
	function updateCallbackNOTOK(){
		alert("Sorry, unable to update reminder, please try again later.");
		
	}
	
	
	//Callback function for the delete myjsonblobID request
	
	function deleteCallbackOK(data){
		$scope.reminder = data;
		//delete scope data
		
	}
	
	
	function deleteCallbackNOTOK(){
		alert("Sorry, unable to delete reminder, please try again later.");
		
	}

});


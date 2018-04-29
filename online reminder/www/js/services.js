
var app = angular.module('myNews')

/*
	myjsonblobService includes functionality to send, recieve and update data from the myjsonblob
*/
.service('myjsonblobService', function($http){
	
	//url for myjsonblob
	var myjsonblobURL = "https://jsonblob.com/api/jsonBlob";
	//holds myjsonblobID during runtime
	var myjsonblobID ="";

/*------------------ Create --------------------------------------------*/

	//function call to create myjsonblob
	this.createmyjsonblob = function(createCallbackOK, createCallbackNOTOK,data){
		
		dateTimeString = "Sat Aug 05 2017 14:39:07 GMT+0100 (GMT Standard Time)";
		
				
		data.creationDate = new Date().toString().substr(0,15), //get date part
		data.creationTime = new Date().toString().substr(16,37) //get time part	


		
		//request to create myjsonblobID using reminder data
		$http.post(myjsonblobURL,JSON.stringify(data)).then(postOK,postNOTOK);

		//create ok, gets the myjsonblobID and calls back to controller
		function postOK(response){
			myjsonblobID = response.headers ("x-jsonblob");
			console.log("myjsonblobID = " + myjsonblobID);
			createCallbackOK();
		}
		//create not ok, calls back to the controller
		function postNOTOK(response){
			createCallbackNOTOK();
		}
	}
	

/*------------------ Get -----------------------------------------------*/

	//function call to get data stored on myjsonblob
	this.getmyjsonblob = function(getCallbackOK,getCallbackNOTOK){
		$http.get(myjsonblobURL+"/"+myjsonblobID).then(getOK,getNOTOK);

		//get ok gets the data associated with myjsonblobID, to be returned to the data attribute of response object
		function getOK(response){
			console.log("myjsonblobID = " + myjsonblobID);
			getCallbackOK(response.data);
		}
		//get not ok, calls back to the controller
		function getNOTOK(response){
			getCallbackNOTOK();
		}
	}

/*------------------ Update --------------------------------------------*/

	//function call to update myjsonblob data
	this.updatemyjsonblob = function(updateCallbackOK, updateCallbackNOTOK, data){
		//request to update myjsonblob using reminder data
		$http.put(myjsonblobURL+"/"+myjsonblobID,JSON.stringify(data)).then(putOK,putNOTOK);

		//update ok
		function putOK(response){
			
			updateCallbackOK (response.data);
			
			//nothing needed to be done
		}
		//update not ok, calls back to the controller
		function putNOTOK(response){
			
			updateCallbackNOTOK();
			
		}
	}
/*------------------ Delete --------------------------------------------*/

	//function call to delete myjsonblob data
	this.deletemyjsonblob = function(deleteCallbackOK, deleteCallbackNOTOK){
		//request to delete myjsonblob using reminder data
		$http.delete(myjsonblobURL+"/"+myjsonblobID).then(deleteOK,deleteNOTOK);

		//delete ok
		function deleteOK(response){
			var blobID = response.headers("x-jsonblob");
			
			deleteCallbackOK ();
			
			//nothing needed to be done
		}
		//delete not ok, calls back to the controller
		function deleteNOTOK(response){
			
			deleteCallbackNOTOK();
			
		}
	}
	
	


	
	
	
	
/*------------------ Get BlobID -----------------------------------------*/
	
	this.getmyjsonblobID = function(){
		return myjsonblobID;
	}

	this.setmyjsonblobID = function(ID){
		myjsonblobID = ID;
	}
})

/*
	STORAGESERVICE
	contains all functionality needed to save, recieve and delete the myjsonblobID from the local storage
*/
.service('storageService', function($window){
	//Saves/updates the myjsonblobID in local storage
	this.setIDInStorage = function(myjsonblobID){
		$window.localStorage.setItem("myjsonblobID",myjsonblobID);
	}

	//Retrieves the myjsonblobID from local storage
	this.getIDFromStorage = function(){
		return $window.localStorage.getItem("myjsonblobID");
	}

	//Deletes the myjsonblobID from local storage
	this.removeIDFromStorage = function(){
		$window.localStorage.removeItem("myjsonblobID");
	}
});
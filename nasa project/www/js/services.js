var app = angular.module('myNews');

/*
dataGetService makes a single http request to the nasa api website.
It calls back to a controller function on good or bad response to either
return the requested data or to return an error.
If the response is good, it calls the cbok function from the controller
and makes the data available.
If the response is bad it calls the cbnotok and returns the error. 
*/
app.service('dataGetService',function($http,$q){
	//Get todays date to hold as a persistant variable
	var date = new Date();
	//Set up last requested date to hold as a persistant variable
	//This is used to create the http request
	var lastDate = {
		year : date.getFullYear(),
		month : date.getMonth()+1,
		day : date.getDate()
	}
	
	this.getData = function(cbok, cbnotok, dateMod){

		//Check if you want todays image
		if(dateMod===0){
			lastDate.year = date.getFullYear();
			lastDate.month = date.getMonth()+1;
			lastDate.day = date.getDate();
		}
		//otherwise get yesterdays date
		else{
			lastDate.year = lastDate.year;
			lastDate.month = lastDate.month;
			lastDate.day = lastDate.day-1;
		}
		
		//Check to see if current date for request is a sunday
		//If it is go back another day
		//There is no APOD on a sunday
		var newDate = new Date(lastDate.year+" "+(lastDate.month)+" "+lastDate.day);
		var newDateStr = newDate.getDay();

		if(newDateStr === 0){
			lastDate.day = lastDate.day-1;
		}

		var APODrequest = 'https://api.nasa.gov/planetary/apod' + 
			'?api_key=MI5ggDDDWa8dsKQVOcFxBQjAUf5UGy5A9WeG6MjB' + '&date=' +
			lastDate.year + "-" + lastDate.month + "-" + lastDate.day;

		//Send a http request and wait for a response
		$http.get(APODrequest)
		.then(OK, NotOK);

		//If response is good, resolve the promise and return the data requested
		function OK(response){
			//Return the data to the controller with a callback
			cbok(response.data);
			
		}

		//If response is bad, return the error data to the controller.
		function NotOK(response){
			//Return the error to the controller with a callback.
			cbnotok(response.data);
		}
	}
});
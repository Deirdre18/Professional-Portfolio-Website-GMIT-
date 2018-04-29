angular.module('CalorieApp')
.controller('MealsController', function ($scope, Bal) {

  $scope.bal = Bal;
 
  
  $scope.breakfastTotal = 0;  
  $scope.breakfastList = [];
  $scope.breakfastCounter = 0;
  $scope.breakfastText = '';
  $scope.bal.BreakfastTotal = 0;
  $scope.bal.BreakfastMin = 0;
  $scope.bal.BreakfastMax = 0;
  $scope.bal.BreakfastAvg = 0;  

   
  // functions call by add button
  $scope.addBreakfast = function() {
               
        if ($scope.breakfastText) {
          
	  // for adding elements to the breakfastlist array
          $scope.breakfastList.push(parseInt(this.breakfastText));
          // reset the input for to blank                  
          $scope.breakfastText = '';
	  // adding up the total calories for breakfast         
          $scope.breakfastTotal += $scope.breakfastList[$scope.breakfastCounter++];
	  // assign the breakfast total to the bal.breakfasttotal variable, this variable(bal.breakfasttotal) 
          // can be used in other views throughout the app and is updated automatically where ever it is used	  
	  $scope.bal.BreakfastTotal = $scope.breakfastTotal;
	  
	  // sort array in ascending order
	  $scope.breakfastList.sort(function(a, b){return a - b});
	  // first element of array is the smallest
	  $scope.bal.BreakfastMin = $scope.breakfastList[0];
	  // last element of array is the largest
	  $scope.bal.BreakfastMax = $scope.breakfastList[$scope.breakfastCounter-1];
          // divides the breakfast total by the size of the array to get the average
	  $scope.bal.BreakfastAvg = $scope.breakfastTotal/$scope.breakfastList.length;
        }       
      };  
  
   
  $scope.bal = Bal;
 
  
  $scope.dinnerTotal = 0;  
  $scope.dinnerList = [];
  $scope.dinnerCounter = 0;
  $scope.dinnerText = '';
  $scope.bal.DinnerTotal = 0;
  $scope.bal.DinnerMin = 0;
  $scope.bal.DinnerMax = 0;
  $scope.bal.DinnerAvg = 0;  

   
  // functions call by add button
  $scope.addDinner = function() {
               
        if ($scope.dinnerText) {
          
	  // for adding elements to the dinnerlist array
          $scope.dinnerList.push(parseInt(this.dinnerText));
          // reset the input for to blank                  
          $scope.dinnerText = '';
	  // adding up the total calories for dinner        
          $scope.dinnerTotal += $scope.dinnerList[$scope.dinnerCounter++];
	  // assign the breakfast total to the bal.dinnertotal variable, this variable(bal.dinnertotal) 
          // can be used in other views throughout the app and is updated automatically where ever it is used	  
	  $scope.bal.DinnerTotal = $scope.dinnerTotal;
	  
	  // sort array in ascending order
	  $scope.dinnerList.sort(function(a, b){return a - b});
	  // first element of array is the smallest
	  $scope.bal.DinnerMin = $scope.dinnerList[0];
	  // last element of array is the largest
	  $scope.bal.DinnerMax = $scope.dinnerList[$scope.dinnerCounter-1];
          // divides the breakfast total by the size of the array to get the average
	  $scope.bal.DinnerAvg = $scope.dinnerTotal/$scope.dinnerList.length;
        }       
      };  
  
 $scope.bal = Bal;
 
  
  $scope.teaTotal = 0;  
  $scope.teaList = [];
  $scope.teaCounter = 0;
  $scope.teaText = '';
  $scope.bal.TeaTotal = 0;
  $scope.bal.TeaMin = 0;
  $scope.bal.TeaMax = 0;
  $scope.bal.TeaAvg = 0;  

   
  // functions call by add button
  $scope.addTea = function() {
               
        if ($scope.teaText) {
          
	  // for adding elements to the tealist array
          $scope.teaList.push(parseInt(this.teaText));
          // reset the input for to blank                  
          $scope.teaText = '';
	  // adding up the total calories for tea         
          $scope.teaTotal += $scope.teaList[$scope.teaCounter++];
	  // assign the tea total to the bal.teatotal variable, this variable(bal.teatotal) 
          // can be used in other views throughout the app and is updated automatically where ever it is used	  
	  $scope.bal.TeaTotal = $scope.teaTotal;
	  
	  // sort array in ascending order
	  $scope.teaList.sort(function(a, b){return a - b});
	  // first element of array is the smallest
	  $scope.bal.TeaMin = $scope.teaList[0];
	  // last element of array is the largest
	  $scope.bal.TeaMax = $scope.teaList[$scope.teaCounter-1];
          // divides the breakfast total by the size of the array to get the average
	  $scope.bal.TeaAvg = $scope.teaTotal/$scope.teaList.length;
        }       
      };  
  
$scope.bal = Bal;
 
  
  $scope.supperTotal = 0;  
  $scope.supperList = [];
  $scope.supperCounter = 0;
  $scope.supperText = '';
  $scope.bal.SupperTotal = 0;
  $scope.bal.SupperMin = 0;
  $scope.bal.SupperMax = 0;
  $scope.bal.SupperAvg = 0;  

   
  // functions call by add button
  $scope.addSupper = function() {
               
        if ($scope.supperText) {
          
	  // for adding elements to the supperlist array
          $scope.supperList.push(parseInt(this.supperText));
          // reset the input for to blank                  
          $scope.supperText = '';
	  // adding up the snack calories for snack        
          $scope.supperTotal += $scope.supperList[$scope.supperCounter++];
	  // assign the supper total to the bal.suppertotal variable, this variable(bal.suppertotal) 
          // can be used in other views throughout the app and is updated automatically where ever it is used	  
	  $scope.bal.SupperTotal = $scope.supperTotal;
	  
	  // sort array in ascending order
	  $scope.supperList.sort(function(a, b){return a - b});
	  // first element of array is the smallest
	  $scope.bal.SupperMin = $scope.supperList[0];
	  // last element of array is the largest
	  $scope.bal.SupperMax = $scope.supperList[$scope.supperCounter-1];
          // divides the supper total by the size of the array to get the average
	  $scope.bal.SupperAvg = $scope.supperTotal/$scope.supperList.length;
        }       
      };  
	  
	  
  $scope.snacksTotal = 0;  
  $scope.snacksList = [];
  $scope.snacksCounter = 0;
  $scope.snacksText = '';
  $scope.bal.SnacksTotal = 0;
  $scope.bal.SnacksMin = 0;
  $scope.bal.SnacksMax = 0;
  $scope.bal.SnacksAvg = 0;  

   
  // functions call by add button
  $scope.addSnacks = function() {
               
        if ($scope.snacksText) {
          
	  // for adding elements to the snacklist array
          $scope.snacksList.push(parseInt(this.snacksText));
          // reset the input for to blank                  
          $scope.snacksText = '';
	  // adding up the snack calories for snack        
          $scope.snacksTotal += $scope.snacksList[$scope.snacksCounter++];
	  // assign the snacks total to the bal.snackstotal variable, this variable(bal.snacktotal) 
          // can be used in other views throughout the app and is updated automatically where ever it is used	  
	  $scope.bal.SnacksTotal = $scope.snacksTotal;
	  
	  // sort array in ascending order
	  $scope.snacksList.sort(function(a, b){return a - b});
	  // first element of array is the smallest
	  $scope.bal.SnacksMin = $scope.snacksList[0];
	  // last element of array is the largest
	  $scope.bal.SnacksMax = $scope.snacksList[$scope.snacksCounter-1];
          // divides the supper total by the size of the array to get the average
	  $scope.bal.SnacksAvg = $scope.snacksTotal/$scope.snacksList.length;
        }       
      };  
  
  

});

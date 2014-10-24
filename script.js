var myApp= angular.module("myApp", []);

myApp.controller("MyController", function($scope, $http, $timeout){

	$scope.errorMessage= false;
	$scope.searchMessage= false;

	var validateForm= function(){
		if($scope.myForm.$valid){
			return true;
		}else{
			$scope.errorMessage="You must Submit a Tag field";
			return false;
			}
	};	
	
	$scope.submit=function(keyword){
		if(validateForm()){
			$scope.searchMessage="Searching Instagram for "+ $scope.keyword;
			$scope.errorMessage=false;
			var url = "https://api.instagram.com/v1/tags/" + $scope.keyword + "/media/recent";     
			var request = {
	                client_id : "0c7279e3eddd47959eea95d6a3a3c83f",
	                callback: 'JSON_CALLBACK'
	            };
	        $http({
	                method: 'JSONP',url: url,params: request
	            }).success(function(response) {
	                	//if the call is a success
	                	if(response.meta.code===200){
	                		if(response.data.length> 0){
	                			$timeout(function() {$scope.results = response.data;}, 10);
	                			$scope.searchMessage="You have" + response.data.length+ "pictures related " + $scope.keyword;
	                			$scope.keyword=null;
	                		}else{$scope.searchMessage="Sorry we couldnt find any pictures related to "+ $scope.keyword;}
	                	}

	                }).
	                error(function() {
	                    $scope.errorMessage="Sorry something wrong happened";
	                });
			} //end of if valid Form
			
		} //end of function(keyword) 

});

//still need to remove pics after you start typing in the search box again
//add animation :/
//why only 20pics







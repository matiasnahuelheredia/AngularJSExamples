var app =angular.module("AppLip",[]);
app.controller("FirstController",function($scope,$http){
	$scope.nombres =[];
	$scope.mostrar = 0;
	$scope.busqueda = "";
	$scope.nombreMostrar= "+";
	$http.get('http://jsonplaceholder.typicode.com/posts')
	.success(function(data){
	   console.log(data);
	   $scope.nombres=data;
	})
	.error(function(err){
	});

	$scope.ocultarTodo = function(){
		
		if ($scope.mostrar==0)
		{
		$scope.nombreMostrar="-";
		$scope.mostrar = 1;
		}
		else
		{
		$scope.nombreMostrar="+";
		$scope.mostrar = 0;
		}
	}
	


	

});


function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
